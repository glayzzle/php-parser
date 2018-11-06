const parser = require('../main');

describe("offsetlookup", function() {
  it("simple", function() {
    expect(parser.parseEval('$obj["index"];')).toMatchSnapshot();
  });
  it("variable", function() {
    expect(parser.parseEval('$obj[$var];')).toMatchSnapshot();
  });
  it("call", function() {
    expect(parser.parseEval('$obj[$var]();')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('$obj["first"]["second"];')).toMatchSnapshot();
  });
});
