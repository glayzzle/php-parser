var should = require("should");
var parser = require('../src/index');

describe('Test graceful mode', function() {

  describe('to suppress errors', function() {

    // init a new parser instance
    var test = parser.create({
      parser: {
        suppressErrors: true
      }
    });

    it('should contain 2 errors', function () {
      // Get result from parser
      var ast = test.parseEval([
        '$var = ',                // 1.
          'function() {',         // 2.
            '$foo = ',            // 3. <-- missing expr
          '}',                    // 4.
        '}'                       // 5. <-- extra '}' token here
      ].join('\n'));
      ast.errors.length.should.be.exactly(2);
      // @todo ast[1][0][2][5][0][2][0].should.be.exactly('error');
    });

    it('test expr', function () {
      var ast = test.parseEval('$a = $b -; $foo = $a;');

      ast.errors.length.should.be.exactly(2);
      ast.children.length.should.be.exactly(2);

      /** @todo
      ast[1][0][2][0].should.be.exactly('bin');
      ast[1][0][2][1].should.be.exactly('-');
      ast[1][0][2][3][0].should.be.exactly('error');

      ast[1][1][0].should.be.exactly('set');
      ast[1][1][1][0].should.be.exactly('var');
      ast[1][1][1][1].should.be.exactly('$foo');
      */
    });

    it('test class', function () {
      var ast = test.parseEval('class foo { foo const A = 1 ');

      ast.errors.length.should.be.exactly(3);
      ast.children.length.should.be.exactly(1);

      /** @todo
      ast[1][0][0].should.be.exactly('class');
      ast[1][0][1].should.be.exactly('foo');
      ast[1][0][5].length.should.be.exactly(2); // including the foo error
      ast[1][0][5][0][0].should.be.exactly('error');
      ast[1][0][5][1][0].should.be.exactly('const');
      ast[1][0][5][1][1].should.be.exactly('A');
      ast[1][0][5][1][2][1].should.be.exactly('1');
      */

    });

    it('test flags', function () {
      var ast = test.parseEval([
        'final final interface foo {',
        '  abstract function func() '
      ].join('\n'));
      ast.errors.length.should.be.exactly(4);
      ast.children.length.should.be.exactly(1);
      ast.children[0].kind.should.be.exactly('interface');
    });

    it('test function arguments', function () {
      // test.parser.debug = true;
      var ast = test.parseEval([
        '$foo->bar($arg, );',
        '$foo = new bar($baz, ,$foo);'
      ].join('\n'));
      var callNode = ast.children[0];
      callNode.kind.should.be.exactly('call');
      callNode.what.kind.should.be.exactly('propertylookup');
      callNode.arguments.length.should.be.exactly(1);
      callNode.arguments[0].name.should.be.exactly('arg');
      var assignNode = ast.children[1];
      assignNode.kind.should.be.exactly('assign');
      assignNode.right.kind.should.be.exactly('new');
      assignNode.right.arguments[0].name.should.be.exactly('baz');
      // the supressError mode cant guarantee $foo to be included into the arguments list
    });


  });

});
