const parser = require('../main');

describe("return", function() {
  it("simple", function() {
    expect(parser.parseEval('return "string";')).toMatchSnapshot();
  });
  it("no expression", function() {
    expect(parser.parseEval('return;')).toMatchSnapshot();
  });
});
