var should = require("should");
var parser = require('../src/index');

/*describe('Function tests', function() {

  it('test variadic', function () {
    // Get result from parser
    var ast = parser.parseEval('function &foo($a = 1, array &...$params) {}');
    var fn = ast[1][0];
    fn[0].should.be.exactly('function');
    fn[1].should.be.exactly('foo');

    var args = fn[2];
    args.length.should.be.exactly(2);

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
  });

});*/
