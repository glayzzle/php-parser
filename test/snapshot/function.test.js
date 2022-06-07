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

  it("test function union types", function () {
    const ast = parser.parseEval(
      `
      function foo(int|float $a = 1, Foo|Bar $b) : string|int {}
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test short function union types", function () {
    const ast = parser.parseEval(
      `
      fn (int|float $a = 1, Foo|Bar $b) : string|int => "";
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test function intersection types", function () {
    const ast = parser.parseEval(
      `
      function foo(int&float $a = 1, Foo&Bar $b) : string&int {}
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test short function intersection types", function () {
    const ast = parser.parseEval(
      `
      fn (int&float $a = 1, Foo&Bar $b) : string&int => "";
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("array pass by reference are not confused with intersection", function () {
    expect(
      parser.parseEval(
        `
      function foo(array &$params)  {
        // inner comment
      }
      `
      )
    ).toMatchSnapshot();
  });

  it("spread array pass by reference are not intersection", function () {
    expect(
      parser.parseEval(
        `
      function &foo(array &$params) {
        // inner comment
      }
      `
      )
    ).toMatchSnapshot();
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

  it("test variadic call error", function () {
    expect(() =>
      parser.parseEval(`$b = foo(...[1, 2, 3], $a);`)
    ).toThrowErrorMatchingSnapshot();
  });

  it("test variadic function error 1", function () {
    expect(() =>
      parser.parseEval(`function foo(...$bar, $baz) {}`)
    ).toThrowErrorMatchingSnapshot();
  });

  it("test variadic function error 2", function () {
    expect(() =>
      parser.parseEval(`function foo(...$bar, ...$baz) {}`)
    ).toThrowErrorMatchingSnapshot();
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

  it("test danging comma in function php 8.0", function () {
    const astErr = parser.parseEval(
      `function (
    $a,
    $b,
    $c,
  ) {}`,
      {
        parser: {
          version: "8.0",
        },
      }
    );
    expect(astErr).toMatchSnapshot();
  });

  it("test without danging comma in closure use-block php 8.0", function () {
    const ast = parser.parseEval("$test = function () use ($one) {}", {
      parser: {
        version: "8.0",
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test danging comma in closure use-block php 8.0", function () {
    const ast = parser.parseEval("$test = function () use ($one,) {}", {
      parser: {
        version: "8.0",
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test without danging comma in closure use-block with refs php 8.0", function () {
    const ast = parser.parseEval("$test = function () use (&$one) {}", {
      parser: {
        version: "8.0",
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test danging comma in closure use-block with refs php 8.0", function () {
    const ast = parser.parseEval("$test = function () use (&$one) {}", {
      parser: {
        version: "8.0",
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test danging comma in closure use-block with multiple php 8.0", function () {
    const ast = parser.parseEval("$test = function () use ($one, $two,) {}", {
      parser: {
        version: "8.0",
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test danging comma in closure use-block with multiple/refs php 8.0", function () {
    const ast = parser.parseEval(
      "$test = function ($one, $two) use ($three, &$four,) {}",
      {
        parser: {
          version: "8.0",
        },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test double danging comma in closure use-block php 8.0", function () {
    const astErr = parser.parseEval("$test = function () use ($one, ,) {}", {
      parser: {
        version: "8.0",
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });

  it("Test readonly function properties are only for class constructor", function () {
    const ast = parser.parseEval(
      `
        function fun(public readonly int $id) {}
      `,
      {
        parser: {
          version: "8.1",
          suppressErrors: true,
        },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  test("first class callable support", function () {
    expect(
      parser.parseEval(
        `
        $callable = strlen(...);
        $callable = $item->doSomething(...);
        $callable = $item::doSomething(...);
        $callable = Foo::doSomething(...);
        `,
        {
          parser: {
            version: "8.1",
          },
        }
      )
    ).toMatchSnapshot();
  });

  test("first class callable support requires PHP 8.1+", function () {
    expect(
      parser.parseEval(
        `
        $callable = strlen(...);
        `,
        {
          parser: {
            suppressErrors: true,
            version: "8.0",
          },
        }
      )
    ).toMatchSnapshot();
  });
});
