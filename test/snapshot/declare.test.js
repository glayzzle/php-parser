const parser = require("../main");

describe("declare", function() {
  it("strict_types", function() {
    expect(parser.parseEval("declare (strict_types=1);")).toMatchSnapshot();
  });
  it("ticks", function() {
    expect(parser.parseEval("declare(ticks=1);")).toMatchSnapshot();
  });
  it("encoding", function() {
    expect(
      parser.parseEval("declare(encoding='ISO-8859-1');")
    ).toMatchSnapshot();
  });
  it("nested", function() {
    expect(parser.parseEval("declare(ticks=1) { }")).toMatchSnapshot();
  });
  it("mode short", function() {
    expect(
      parser.parseEval('declare(ticks=1): echo "something"; enddeclare;')
    ).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval("declare (A='B', C='D') { }")).toMatchSnapshot();
  });
});
