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
    // @todo assert console.log(ast);

  });
  it('dereferencable', function() {
    var ast = parser.parseEval([
      '$a = foo::bar()[5]->test;',
      '$b = (new test())->foo();',
      '$c = (foo())[5];',
      '$d = (function($a) { return $a * 2; })(5);',
    ].join('\n'), {
      parser: {
        debug: true
      }
    });

  });
});
