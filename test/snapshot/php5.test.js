const parser = require('../main');

describe('Test syntax parsing without PHP7 support', function() {

  it('special keywords should fail', function() {
    var ast = parser.parseEval('class foo { function list() { } }', {
      parser: {
        php7: false,
        suppressErrors: true
      }
    });
    expect(ast).toMatchSnapshot();
  });
});
