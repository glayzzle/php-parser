var should = require("should");
var parser = require('./main');

describe('Test syntax parsing without PHP7 support', function() {

  it('special keywords should fail', function() {
    var ast = parser.parseEval('class foo { function list() { } }', {
      parser: {
        php7: false,
        suppressErrors: true
      }
    });
    ast.errors.length.should.be.greaterThan(0);
    ast.children.length.should.be.exactly(1);
    ast.children[0].kind.should.be.exactly('class');
    ast.children[0].body.length.should.be.exactly(1);
    ast.children[0].body[0].kind.should.be.exactly('method');
    // @todo ast.children[0].body[0].name.should.be.exactly('list');

  });

});