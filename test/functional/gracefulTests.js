var should = require("should");
var parser = require('../../main');

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
      ast[2].length.should.be.exactly(2);
      ast[1][0][2][5][0][2][0].should.be.exactly('error');
    });

    it('test expr', function () {
      var ast = test.parseEval('$a = $b -; $foo = $a;');

      ast[2].length.should.be.exactly(2);
      ast[1].length.should.be.exactly(2);

      ast[1][0][2][0].should.be.exactly('bin');
      ast[1][0][2][1].should.be.exactly('-');
      ast[1][0][2][3][0].should.be.exactly('error');

      ast[1][1][0].should.be.exactly('set');
      ast[1][1][1][0].should.be.exactly('var');
      ast[1][1][1][1].should.be.exactly('$foo');
    });

    it('test class', function () {
      var ast = test.parseEval('class foo { foo const A = 1 ');

      ast[2].length.should.be.exactly(3);
      ast[1].length.should.be.exactly(1);

      ast[1][0][0].should.be.exactly('class');
      ast[1][0][1].should.be.exactly('foo');
      ast[1][0][5].length.should.be.exactly(2); // including the foo error
      ast[1][0][5][0][0].should.be.exactly('error');
      ast[1][0][5][1][0].should.be.exactly('const');
      ast[1][0][5][1][1].should.be.exactly('A');
      ast[1][0][5][1][2][1].should.be.exactly('1');

    });

    it('test flags', function () {
      var ast = test.parseEval('final final interface foo { abstract function func() ');
      ast[2].length.should.be.exactly(4);
      ast[1].length.should.be.exactly(2);
      ast[1][0][0].should.be.exactly('error');
      ast[1][1][0].should.be.exactly('interface');
    });

  });

});
