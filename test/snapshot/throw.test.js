const parser = require('../main');

describe("throw", function() {
  it("simple", function() {
    expect(parser.parseEval('throw new Exception("Error");')).toMatchSnapshot();
  });
});
