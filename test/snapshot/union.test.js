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

  it("dnf type: (A&B)|null", function () {
    expect(parser.parseEval("function((A&B)|null $test) {}")).toMatchSnapshot();
  });

  it("dnf type: null|(A&B)", function () {
    expect(parser.parseEval("function(null|(A&B) $test) {}")).toMatchSnapshot();
  });

  it("dnf type: (A&B)|(C&D)", function () {
    expect(
      parser.parseEval("function((A&B)|(C&D) $test) {}"),
    ).toMatchSnapshot();
  });

  it("dnf type: return type", function () {
    expect(parser.parseEval("function foo(): (A&B)|null {}")).toMatchSnapshot();
  });

  it("dnf type not supported before 8.2", function () {
    expect(
      parser.parseEval("function((A&B)|null $test) {}", {
        parser: { version: "8.1", suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });
});
