/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */

module.exports = {
  explode: true
  ,handles: function(filename, ext) {
    return ext == '.parser';
  }
  // runs a parser file : test parsing behaviours
  ,run: function(data, filename, PHP) {
    try {
      console.log('   >> Start test : ' + data.shift());
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
        writer = {
          buffer: '',
          write: function(output) {
            this.buffer += output;
          }
        };
        console.log('   mode : ' + test.mode);
        if (test.mode.substring(0, 4) == 'FAIL') {
          ok = false;
          try {
            PHP.clean().eval(test.buffer, false, writer);
            ok = true;
          } catch(e) {
            ok = false;
          }
          if (ok) {
            throw new Error('Test should fail to parse : \n>> ' + test.buffer);
          }
        } else {
          try {
            PHP.clean().eval(test.buffer, false, writer);
            console.log('Output :' + writer.buffer);
          } catch(e) {
            e.source = test.buffer;
            throw e;
          }
        }
      }
      return true;
    } catch(e) {
      PHP.context.parseError(e, e.source);
      return false;
    }
  }
};