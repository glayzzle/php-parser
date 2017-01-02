var should = require("should");
var parser = require('./main');

describe('Test scalar statements', function() {
  it('constants', function() {
    var ast = parser.parseEval([
      '$a = foo::ref[-5];'
    ].join('\n'), {
      parser: {
        debug: true
      }
    });
    console.log(ast);
  });
});
