const parser = require("../main");

describe("new", function () {
  it("#348 - byref usage deprecated", function () {
    expect(
      parser.parseEval("$a =& new Foo();", {
        parser: {
          suppressErrors: true,
        },
      })
    ).toMatchSnapshot();
  });
  it("simple", function () {
    expect(parser.parseEval("new Foo();")).toMatchSnapshot();
  });
  it("variable", function () {
    expect(parser.parseEval("new $var;")).toMatchSnapshot();
  });
  it("simple (2)", function () {
    expect(parser.parseEval("new \\Foo();")).toMatchSnapshot();
  });
  it("simple (3)", function () {
    expect(parser.parseEval("new Foo\\Foo();")).toMatchSnapshot();
  });
  it("simple (4)", function () {
    expect(parser.parseEval("new \\Foo\\Foo();")).toMatchSnapshot();
  });
  it("no parens", function () {
    expect(parser.parseEval("new Foo;")).toMatchSnapshot();
  });
  it("anonymous", function () {
    expect(parser.parseEval("new class() {};")).toMatchSnapshot();
  });
  it("anonymous no parens", function () {
    expect(parser.parseEval("new class {};")).toMatchSnapshot();
  });
  it("anonymous with argument", function () {
    expect(parser.parseEval("new class($var) {};")).toMatchSnapshot();
  });
  it("anonymous with multiple argument", function () {
    expect(
      parser.parseEval("new class($one, $two, $three) {};")
    ).toMatchSnapshot();
  });
  it("parent", function () {
    expect(parser.parseEval("new parent();")).toMatchSnapshot();
  });
  it("self", function () {
    expect(parser.parseEval("new self();")).toMatchSnapshot();
  });
  it("static", function () {
    expect(parser.parseEval("new static();")).toMatchSnapshot();
  });
  it("with arguments", function () {
    expect(
      parser.parseEval('new Foo("constructor", "bar");')
    ).toMatchSnapshot();
  });
  it("trailing comma", function () {
    expect(
      parser.parseEval('new Foo("constructor", "bar",);')
    ).toMatchSnapshot();
  });
  it("anonymous class", function () {
    expect(parser.parseEval("$var = new class {};")).toMatchSnapshot();
  });
  it("anonymous class #2", function () {
    expect(parser.parseEval("$var = new class($var) {};")).toMatchSnapshot();
  });
  it("anonymous class #3", function () {
    expect(
      parser.parseEval(
        "$var = new class($var) extends SomeClass implements SomeInterface {};"
      )
    ).toMatchSnapshot();
  });
});
