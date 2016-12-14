/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var util = require('util');

module.exports = {
  explode: true
  ,handles: function(filename, ext) {
    return ext == '.phpt';
  }
  // runs a parser file : test parsing behaviours
  ,run: function(data, filename, engine) {
    try {
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

      var ok = true;
      for(var i = 0; i < tests.length; i++) {
        test=tests[i];
        if (test.mode === 'TEST') {
          engine.parser.debug && console.log('> ' + test.buffer.trim());
          continue;
        }
        if (test.mode === 'FILE') {
          try {
            var ast = engine.parseCode(test.buffer);
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
            console.log(e.stack);
            ok = false;
          }
        } else {
          engine.parser.debug && console.log('IGNORE ' + test.mode);
        }
      }
      return ok;
    } catch(e) {
      console.error(e.stack);
      return false;
    }
  }
};
