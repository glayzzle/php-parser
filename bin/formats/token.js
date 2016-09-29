/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var fs = require('fs');
var cmd = require('./cmd');

module.exports = {
  handles: function(filename, ext) {
    if (ext == '.out') {
      fs.unlink(filename);
      return false;
    }
    return filename.indexOf("/token/") > -1 && (
      ext == '.php'
      || ext == '.phtml'
      || ext == '.html'
    );
  }
  ,run: function(filename, engine) {
    if (engine.parser.debug) console.log(filename);
    // USING THE LEXER TO PARSE THE FILE :
    var EOF = engine.lexer.EOF;
    engine.lexer.mode_eval = false;
    engine.lexer.all_tokens = true;
    engine.lexer.setInput(fs.readFileSync(filename, {
      encoding: 'binary'
    }));
    var token = engine.lexer.lex() || EOF;
    var names = engine.tokens.values;
    var jsTok = [];
    var i = 0;
    var hrstart = process.hrtime();
    var mem = process.memoryUsage();
    while(token != EOF) {
      var entry = engine.lexer.yytext;
      if (names[token]) {
        entry = [names[token], entry, engine.lexer.yylloc.first_line];
      }
      jsTok.push(entry);
      token = engine.lexer.lex() || EOF;
    }  
    if (engine.parser.debug) {
      var  hrend = process.hrtime(hrstart);
      if (hrend[1] > 0)
      console.log(
        'Speed : ', 
        (Math.round(jsTok.length / 1000) / 10) + 'K Tokens parsed at ', 
        (Math.round(jsTok.length * 60000 / (hrend[1] / 1000000) / 1000 / 100) / 10) + 'M Token/sec - total time ', 
        Math.round(hrend[1] / 100000) / 10, 'ms'
      );
      console.log('Memory : ', Math.round((process.memoryUsage().heapUsed - mem.heapUsed) / 1024), 'kb');
    }

    // USING THE PHP ENGINE TO PARSE
    var result = cmd.exec('php ' + __dirname + '/token.php ' + filename);
    var phpTok = false;
    try {
      phpTok = JSON.parse(result.stdout);
    } catch(e) {
      console.log('Fail to parse output : ', result.stdout);
      throw e;
    }
    
    var fail = false;
    var error = [[], []];

    // CHECK ALL TOKENS
    for(var i = 0; i < phpTok.length; i++) {
      var p = phpTok[i];
      var j = jsTok[i];
      if (engine.parser.debug) {
        if (j instanceof Array) {
          console.log('JS('+j[2]+')  : ', j[0], j[1]);
        }
        if (p instanceof Array) {
          console.log('PHP('+p[2]+') : ', p[0], p[1]);
        }
      }
      if ( p instanceof Array ) {
        if ( j instanceof Array ) {
          if (p[0] != j[0]) { // check the token type
            if (
              (p[0] == 'T_LNUMBER' || p[0] == 'T_DNUMBER')
              && (j[0] == 'T_LNUMBER' || j[0] == 'T_DNUMBER')
            ) {
              // @fixme : ignore numbers size - long are not handled in same way
            } else {
              console.log('FAIL : Expected ' + p[0] + ' token, but found ' + j[0]);
              fail = true;
            }
          }
          if (p[1] != j[1]) { // check the token contents
            j[1] = JSON.parse( JSON.stringify( j[1] ) );
            console.log('FAIL : Expected "' + p[1] + '" contents, but found "' + j[1] + '"');
            fail = true;
          }
          if (engine.parser.debug && p[2] != j[2]) { // check the token line
            console.log('NOTICE : Expected line ' + p[2] + ', but found ' + j[2]);
            fail = true; 
          }
        } else {
          console.log('FAIL : Expected ' + p[0] + ' token, but found "' + j + '" symbol');
          fail = true;
        }
      } else {
        if ( j !== p ) {
          console.log('FAIL : Expected "' + p + '", but found "' + j + '"');
          fail = true;
        }
      }
      if (fail) {
        error[0].push(j);
        error[1].push(p);
        break;
      }
    }

    // OUTPUT ERRORS IF FOUND
    if (phpTok.length != jsTok.length) {
      console.log('FAIL : Token arrays have not the same length !');
      fail = true;
    }
    if (fail) {
      console.log('\nError at : ' + filename);
      console.log('\nJS Tokens', error[0]);
      console.log('PHP Tokens', error[1]);
      // ADD A LOG FILE (FOR ANALYSIS)
      fs.writeFileSync(
        filename + '.out',
        JSON.stringify(jsTok)
        + "\n\n" + JSON.stringify(phpTok)
      );
      return false;
    } else {
      if (engine.parser.debug) {
        console.log('v - Passed ' + jsTok.length + ' tokens');
      }
      return true;
    }
  }
};