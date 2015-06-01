/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var util = require('util');

module.exports = {
  explode: true
  ,handles: function(filename, ext) {
    return ext == '.parser';
  }
  // runs a parser file : test parsing behaviours
  ,run: function(data, filename, engine) {
    try {
      if (engine.parser.debug) {
        console.log('   >> Start test : ' + data.shift());
      }
      var test = {
        buffer: '',
        mode: ''
      };
      var tests =  [];
      data.forEach(function(line) {
        if (line.substring(0, 2) == '--') {
          if (test.mode != '') tests.push(test);
          test = {
            buffer: '', mode: line.substring(2, line.length - 2)
          };
        } else {
          test.buffer += line + '\r\n';
        }
      });
      if (test) tests.push(test);
      var writer;
      var ok;
      for(var i = 0; i < tests.length; i++) {
        test=tests[i];
        engine.parser.debug && console.log('   mode : ' + test.mode);
        if (test.mode.substring(0, 4) == 'FAIL') {
          ok = false;
          try { 
            var ast = engine.parseEval(test.buffer);
            ok = true;
            if (engine.parser.debug) {
              console.log(
                util.inspect(
                  ast, { 
                    showHidden: false, 
                    depth: 10, 
                    colors: true 
                  }
                )
              );
            }
          } catch(e) {
            engine.parser.debug && console.log(e);
            ok = false;
          }
          if (ok) {
            throw new Error('Test should fail to parse : \n>> ' + test.buffer);
          }
        } else {
          try {
            var ast = engine.parseEval(test.buffer);
            if (engine.parser.debug) {
              console.log(
                util.inspect(
                  ast, { 
                    showHidden: false, 
                    depth: 10, 
                    colors: true 
                  }
                )
              );
            }
          } catch(e) {
            e.source = test.buffer;
            throw e;
          }
        }
      }
      return true;
    } catch(e) {
      // @fixme - this function does not exists, should be declared in parser.js ?
      throw e;
      // engine.parseError(e, e.source);
      return false;
    }
  }
};