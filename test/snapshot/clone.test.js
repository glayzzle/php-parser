const parser = require('../main');

describe("clone", function() {
  it("simple", function() {
    expect(parser.parseEval('clone $obj;')).toMatchSnapshot();
  });
  it("assign", function() {
    expect(parser.parseEval('$var = clone $obj;')).toMatchSnapshot();
  });
});
