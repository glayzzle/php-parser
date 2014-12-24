/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/glayzzle-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var util = require('util');
module.exports = {
  explode: true
  ,handles: function(filename, ext) {
    return ext == '.phpt';
  }
  // declare a file running test with phpt format
  ,run: function(data, filename, PHP) {
    try {
      var test = {};
      var mode = null;
      data.forEach(function(line) {
        if (line.substring(0, 2) == '--') {
          mode = line.substring(2, line.length - 2);
          test[mode] = '';
        } else {
          test[mode] += line + '\r\n';
        }
      });
      console.log('   >> Start test : ' + test.TEST);
      var writer = {
        buffer: '',
        write: function(output) {
          this.buffer += output;
        }
      };
      PHP.clean().eval(test.FILE.substring(5), false, writer);
      if (test['EXPECTF-'] != writer.buffer) {
        console.log('Expected : ' + JSON.stringify(test['EXPECTF-']));
        console.log('Found : ' + JSON.stringify(writer.buffer));
        return false;
      } else return true;
    } catch(e) {
      util.error( (e.stack || e) + '\n' );
      return false;
    }
  }
};
