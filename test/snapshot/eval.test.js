const parser = require('../main');

describe("exit", function() {
  it("simple", function() {
    expect(parser.parseEval('eval("command");')).toMatchSnapshot();
  });
});
