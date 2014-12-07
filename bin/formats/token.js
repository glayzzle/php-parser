/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */
var fs = require('fs');
var cmd = require('./cmd');

module.exports = {
  handles: function(filename, ext) {
    if (ext == '.out') {
      fs.unlink(filename);
      return false;
    }
    return filename.substring(0, 9) == '../token/' && (
      ext == '.php'
      || ext == '.phtml'
      || ext == '.html'
    );
  }
  ,run: function(filename, PHP) {
    var jsTok = PHP.globals.__call(
      'token_get_all',
      fs.readFileSync(filename).toString()
    );
    for(var i = 0; i < jsTok.length; i++) {
      if (jsTok[i] instanceof Array) {
        jsTok[i][0] = PHP.globals.__call(
          'token_name', jsTok[i][0]
        );
      }
    }

    var result = cmd.exec('php ' + __dirname + '/token.php ' + filename);

    var phpTok = JSON.parse(result.stdout);
    var fail = false;
    var error = [[], []];
    for(var i = 0; i < phpTok.length; i++) {
      var p = phpTok[i];
      var j = jsTok[i];
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
            console.log('FAIL : Expected "' + p[1] + '" contents, but found "' + j[1] + '"');
            fail = true;
          }
          if (p[2] != j[2]) { // check the token line
            console.log('FAIL : Expected line ' + p[2] + ', but found ' + j[2]);
            // @todo fixme fail = true; 
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
    if (phpTok.length != jsTok.length) {
      console.log('FAIL : Token arrays have not the same length !');
      fail = true;
    }
    if (fail) {
      console.log('\nError at : ' + filename);
      console.log('\nJS Tokens', error[0]);
      console.log('PHP Tokens', error[1]);
      fs.writeFileSync(
        filename + '.out',
        JSON.stringify(jsTok)
        + "\n\n" + JSON.stringify(phpTok)
      );
      return false;
    } else {
      console.log('PASSED ' + jsTok.length + ' tokens');
      return true;
    }
  }
};