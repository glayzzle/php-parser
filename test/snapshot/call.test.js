const parser = require("../main");

describe("Test call", function () {
  it("simple", function () {
    const ast = parser.parseEval("call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("multiple", function () {
    const ast = parser.parseEval("call()()();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("multiple (2)", function () {
    const ast = parser.parseEval("$obj->call()->call()->call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("nested", function () {
    const ast = parser.parseEval("call(call(call()));", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("single argument", function () {
    const ast = parser.parseEval("call($a);", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("multiple arguments", function () {
    const ast = parser.parseEval("call($a, $b, $c);", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("propertylookup", function () {
    const ast = parser.parseEval("$obj->call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("propertylookup (2)", function () {
    const ast = parser.parseEval("$obj->property->call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("nullsafepropertylookup", function () {
    const ast = parser.parseEval("$obj?->call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("nullsafepropertylookup (2)", function () {
    const ast = parser.parseEval("$obj?->property?->call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("staticlookup", function () {
    const ast = parser.parseEval("$obj::call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("staticlookup (2)", function () {
    const ast = parser.parseEval("Foo::call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("offsetlookup", function () {
    const ast = parser.parseEval('$array["index"]();', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("parent", function () {
    const ast = parser.parseEval(
      "class Foo { function foo() { parent::call(); } }",
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("self", function () {
    const ast = parser.parseEval(
      "class Foo { function foo() { self::call(); } }",
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("static", function () {
    const ast = parser.parseEval(
      "class Foo { function foo() { static::call(); } }",
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("variable function", function () {
    const ast = parser.parseEval("$func();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("variable function (2)", function () {
    const ast = parser.parseEval("$obj->$func();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("variable function (3)", function () {
    const ast = parser.parseEval("Foo::$func();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("string", function () {
    const ast = parser.parseEval('("func")();', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("array", function () {
    const ast = parser.parseEval('array("Foo", "bar")();', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("array parens", function () {
    const ast = parser.parseEval('(array("Foo", "bar"))();', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside offsetlookup", function () {
    const ast = parser.parseEval('get_class($obj)["offset"];', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside propertylookup", function () {
    const ast = parser.parseEval("get_class($obj)->property;", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup", function () {
    const ast = parser.parseEval("get_class($obj)::call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (2)", function () {
    const ast = parser.parseEval("get_class($obj)::call()::call()::call();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (3)", function () {
    const ast = parser.parseEval("get_class($obj)::$property;", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (4)", function () {
    const ast = parser.parseEval(
      "get_class($obj)::$property::$property::$property;",
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (5)", function () {
    const ast = parser.parseEval("get_class($obj)::CONSTANT;", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (6)", function () {
    const ast = parser.parseEval("get_class($var)::${$property};", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (7)", function () {
    const ast = parser.parseEval(
      "get_class($var)::${$property}::${$property}::${$property};",
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (8)", function () {
    const ast = parser.parseEval('get_class($var)::${"property"};', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (9)", function () {
    const ast = parser.parseEval("get_class($var)::${$property};", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (10)", function () {
    const ast = parser.parseEval("Order::call()();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("inside staticlookup (11)", function () {
    const ast = parser.parseEval("Order::{call()}();", {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("trailing comma", function () {
    const ast = parser.parseEval('foo("method", "bar",);', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("trailing comma #2", function () {
    const ast = parser.parseEval('$foo("method", "bar",);', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("trailing comma #3", function () {
    const ast = parser.parseEval('$foo->bar("method", "bar",);', {
      parser: { debug: false },
    });
    expect(ast).toMatchSnapshot();
  });
  it("named arguments in php 8.0", function () {
    const astErr = parser.parseEval(`foo(a: $a);`, {
      parser: {
        version: "8.0",
        debug: false,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("named arguments are not supported in php 7.2", function () {
    expect(() =>
      parser.parseEval(`foo(a: $a);`, {
        parser: {
          version: "7.2",
          debug: false,
        },
      })
    ).toThrow("PHP 8+ is required to use named arguments");
  });
  it("doesnt confused static methods with named arguments", function () {
    const astErr = parser.parseEval(`foo(a::bar());`, {
      parser: {
        version: "8.0",
        debug: false,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("keyword as named argument", function () {
    const astErr = parser.parseEval(`foo(array: $a);`, {
      parser: {
        version: "8.0",
        debug: false,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("mix of unnamed and named arguments", function () {
    const astErr = parser.parseEval(`foo(50, num: 100, start_index: 0);`, {
      parser: {
        version: "8.0",
        debug: false,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("comments", function () {
    const astErr = parser.parseEval(
      `foo(array // comment
      (100, 0));`,
      {
        parser: {
          extractDoc: true,
          debug: false,
        },
      }
    );
    expect(astErr).toMatchSnapshot();
  });
});
