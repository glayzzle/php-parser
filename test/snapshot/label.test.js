const parser = require('../main');

describe("label", function() {
  it("simple", function() {
    expect(parser.parseEval('a: echo "Foo";')).toMatchSnapshot();
  });
});
