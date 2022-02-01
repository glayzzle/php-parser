const parser = require("../main");

describe("nullsavepropertylookup", function () {
  it("simple", function () {
    expect(parser.parseEval("$obj?->property;")).toMatchSnapshot();
  });
  it("variable", function () {
    expect(parser.parseEval("$obj?->$property;")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("$obj?->call();")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(
      parser.parseEval("$obj?->property_1?->property_2;")
    ).toMatchSnapshot();
  });
});
