const parser = require('../main');

describe("eval", function() {
  it("simple", function() {
    expect(parser.parseEval('eval("command");')).toMatchSnapshot();
  });
});
