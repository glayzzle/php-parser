var should = require("should");
var parser = require('../src/index');

describe('Function tests', function() {
  var ast = parser.parseEval(
    'function &foo($a = 1, callable $b, ?array &...$params) : ?boolean {}'
  );

  it('test description', function () {
    // Get result from parser
    ast.children[0].kind.should.be.exactly('function');
    ast.children[0].name.should.be.exactly('foo');
    ast.children[0].byref.should.be.exactly(true);
    ast.children[0].nullable.should.be.exactly(true);
    ast.children[0].type.name.should.be.exactly('boolean');
  });

  it('test arguments', function () {
    /*
    // 1st param
    var arg1 = args[0];
    arg1[0].should.be.exactly('param');
    arg1[1].should.be.exactly('$a');
    should.equal(arg1[2], null);
    arg1[3][0].should.be.exactly('number');
    arg1[3][1].should.be.exactly('1');
    arg1[4].should.be.exactly(false, 'not byref');
    arg1[5].should.be.exactly(false, 'not variadic');

    // 2nd param
    var arg2 = args[1];
    arg2[0].should.be.exactly('param');
    arg2[1].should.be.exactly('$params');
    arg2[2][0].should.be.exactly('array');
    should.equal(arg2[3], null);
    arg2[4].should.be.exactly(true, 'byref');
    arg2[5].should.be.exactly(true, 'variadic');
    */
  });


});
