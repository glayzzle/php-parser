const parser = require('../main');

describe("Function tests", function() {
  it("test function parsing", function() {
    const ast = parser.parseEval(
      `
      function &foo($a = 1, callable $b, ?array &...$params) : ?boolean {}
      $a = function &($b) use(&$c, $d) : array {
        return true;
      };
      $b = foo(...[1, null, 1, 2, 3]);
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test variadic error", function() {
    const astErr = parser.parseEval(`$b = foo(...[1, 2, 3], $a);`, {
      parser: {
        suppressErrors: true
      }
    });
    expect(astErr).toMatchSnapshot();
  });

  it("test reserved word for function name error", function() {
    const astErr = parser.parseEval(`function list() {}`, {
      parser: {
        suppressErrors: true
      }
    });
    expect(astErr).toMatchSnapshot();
  });

  it("test static closure", function() {
    const ast = parser.parseEval("$a = static function() {};");
    expect(ast).toMatchSnapshot();
  });
});
