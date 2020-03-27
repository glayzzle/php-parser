const parser = require("../main");

describe("Function tests", function () {
  it("test function parsing", function () {
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

  it("implement #113 : typehint nodes", function () {
    expect(
      parser.parseEval(
        `
      function &foo(int $a = 1, float $b = 1, bool $c = 1, string $d, callable $e, int\\bar $f, ?array &...$params) : ?object {
        // inner comment
      }
      `
      )
    ).toMatchSnapshot();
  });

  it("implement #196 : set function name as identifier", function () {
    const ast = parser.parseEval(
      `
      function f /* f */($a) {}
      `,
      {
        parser: {
          extractDoc: true,
        },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test variadic error", function () {
    const astErr = parser.parseEval(`$b = foo(...[1, 2, 3], $a);`, {
      parser: {
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });

  it("test reserved word for function name error", function () {
    const astErr = parser.parseEval(`function list() {}`, {
      parser: {
        version: "5.6",
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });

  it("test static closure", function () {
    const ast = parser.parseEval("$a = static function() {};");
    expect(ast).toMatchSnapshot();
  });

  it("test arrow function php 7.4", function () {
    const astErr = parser.parseEval(`function () {}`, {
      parser: {
        version: "7.4",
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
});
