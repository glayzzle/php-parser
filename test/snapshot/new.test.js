const parser = require('../main');

describe("new", function() {
  it("simple", function() {
    expect(parser.parseEval('new Foo();')).toMatchSnapshot();
  });
  it("variable", function() {
    expect(parser.parseEval('new $var;')).toMatchSnapshot();
  });
  it("simple (2)", function() {
    expect(parser.parseEval('new \\Foo();')).toMatchSnapshot();
  });
  it("simple (3)", function() {
    expect(parser.parseEval('new Foo\\Foo();')).toMatchSnapshot();
  });
  it("simple (4)", function() {
    expect(parser.parseEval('new \\Foo\\Foo();')).toMatchSnapshot();
  });
  it("no parens", function() {
    expect(parser.parseEval('new Foo;')).toMatchSnapshot();
  });
  it("anonymous", function() {
    expect(parser.parseEval('new class() {};')).toMatchSnapshot();
  });
  it("anonymous no parens", function() {
    expect(parser.parseEval('new class {};')).toMatchSnapshot();
  });
  it("anonymous with argument", function() {
    expect(parser.parseEval('new class($var) {};')).toMatchSnapshot();
  });
  it("anonymous with multiple argument", function() {
    expect(parser.parseEval('new class($one, $two, $three) {};')).toMatchSnapshot();
  });
});
