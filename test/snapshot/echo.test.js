const parser = require("../main");

describe("echo", function () {
  it("simple", function () {
    expect(parser.parseEval('echo "string";')).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(parser.parseEval('echo "string", "string";')).toMatchSnapshot();
  });
});
