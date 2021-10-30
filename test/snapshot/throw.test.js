const parser = require("../main");

describe("throw", function () {
  it("simple", function () {
    expect(parser.parseEval('throw new Exception("Error");')).toMatchSnapshot();
  });
  it("arrow function", function () {
    expect(
      parser.parseEval('$fn = fn() => throw new Exception("oops");')
    ).toMatchSnapshot();
  });
  it("arrow function in PHP < 8", function () {
    expect(() =>
      parser.parseEval('$fn = fn() => throw new Exception("oops");', {
        parser: { version: "7.4" },
      })
    ).toThrow();
  });
});
