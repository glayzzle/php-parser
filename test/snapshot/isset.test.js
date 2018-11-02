const parser = require('../main');

describe("isset", function() {
  it("simple", function() {
    expect(parser.parseEval('isset($var);')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('isset($var, $var, $var);')).toMatchSnapshot();
  });
  it("assign", function() {
    expect(parser.parseEval('$var = isset($var);')).toMatchSnapshot();
  });
});
