const parser = require('../main');

describe('Test syntax parsing with PHP 73 support', function() {

  it('https://wiki.php.net/rfc/list_reference_assignment', function() {
    var ast = parser.parseEval('[$a, &$b] = $array; list($a, &$b) = $array;', {
      parser: {
        php7: true,
        php74: false
      }
    });
    expect(ast).toMatchSnapshot();
  });
});
