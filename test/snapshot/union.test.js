const parser = require("../main");

describe("Test unions", function () {
  it("simple union", function () {
    expect(parser.parseEval("function(foo|bar $test) {}")).toMatchSnapshot();
  });

  it("simple intersection", function () {
    expect(parser.parseEval("function(foo&bar $test) {}")).toMatchSnapshot();
  });

  it("union with reference", function () {
    expect(parser.parseEval("function(foo|bar &$test) {}")).toMatchSnapshot();
  });

  it("intersection with reference", function () {
    expect(parser.parseEval("function(foo&bar &$test) {}")).toMatchSnapshot();
  });

  it("union with variadic", function () {
    expect(parser.parseEval("function(foo|bar ...$test) {}")).toMatchSnapshot();
  });

  it("intersection with variadic", function () {
    expect(parser.parseEval("function(foo&bar ...$test) {}")).toMatchSnapshot();
  });

  it("union with three types", function () {
    expect(
      parser.parseEval("function(foo|bar|baz $test) {}"),
    ).toMatchSnapshot();
  });

  it("intersection with three types", function () {
    expect(
      parser.parseEval("function(foo&bar&baz $test) {}"),
    ).toMatchSnapshot();
  });

  it("union mixed with intersection", function () {
    const astErr = parser.parseEval("function(foo|bar&baz $test) {}", {
      parser: {
        version: "8.1",
        suppressErrors: true,
      },
    });

    expect(astErr).toMatchSnapshot();
  });

  it("intersection mixed with union", function () {
    const astErr = parser.parseEval("function(foo&bar|baz $test) {}", {
      parser: {
        version: "8.1",
        suppressErrors: true,
      },
    });

    expect(astErr).toMatchSnapshot();
  });
});
