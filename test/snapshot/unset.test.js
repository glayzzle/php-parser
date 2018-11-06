const parser = require('../main');

describe("unset", function() {
  it("simple", function() {
    expect(parser.parseEval('unset($var);')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('unset($var, $var, $var);')).toMatchSnapshot();
  });
});
