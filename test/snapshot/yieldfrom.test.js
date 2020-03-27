const parser = require("../main");

describe("yieldfrom", function () {
  it("simple", function () {
    expect(parser.parseEval("yield from from();")).toMatchSnapshot();
  });
  it("array", function () {
    expect(parser.parseEval("yield from [3, 4];")).toMatchSnapshot();
  });
  it("new", function () {
    expect(
      parser.parseEval("yield from new ArrayIterator([5, 6]);")
    ).toMatchSnapshot();
  });
  it("return", function () {
    expect(parser.parseEval("return yield from nine_ten();")).toMatchSnapshot();
  });
});
