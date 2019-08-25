const parser = require('../main');

describe('Test syntax parsing with PHP 73 support', function() {

  it('https://wiki.php.net/rfc/list_reference_assignment', function() {
    var ast = parser.parseEval('[$a, &$b] = $array; list($a, &$b) = $array;', {
      parser: {
        php73: true
      }
    });
    expect(ast).toMatchSnapshot();
  });

  it('https://wiki.php.net/rfc/trailing-comma-function-calls', function() {
    var ast = parser.parseEval(`
    $newArray = array_merge(
        $arrayOne,
        $arrayTwo,
        ['foo', 'bar'],
    );

    $foo = new Foo(
        'constructor',
        'bar',
      );
       
      $foo->bar(
        'method',
        'bar',
      );
       
      $foo(
        'invoke',
        'bar',
      );

    unset($foo, $bar,);
    var_dump(isset($foo, $bar,));
    `, {
        parser: {
          php73: true
        }
      });
      expect(ast).toMatchSnapshot();
  });

  it('https://wiki.php.net/rfc/trailing-comma-function-calls#errors', function() {
    var ast = parser.parseEval(`
    # Parse error
    function bar($a, $b,) {
        //
    }
    # Parse error
    foo(,);

    # Parse error
    foo('function', 'bar',,);
    # Also parse error
    foo(, 'function', 'bar');
    `, {
        parser: {
          php73: true,
          suppressErrors: true
        }
      });
      expect(ast).toMatchSnapshot();
  });
});
