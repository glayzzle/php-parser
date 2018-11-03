const parser = require('../main');

describe("magic", function() {
  it("__LINE__", function() {
    expect(parser.parseEval('__LINE__;')).toMatchSnapshot();
  });
  it("__LINE__ lowercase", function() {
    expect(parser.parseEval('__line__;')).toMatchSnapshot();
  });
  it("__FILE__", function() {
    expect(parser.parseEval('__FILE__;')).toMatchSnapshot();
  });
  it("__DIR__", function() {
    expect(parser.parseEval('__DIR__;')).toMatchSnapshot();
  });
  it("__FUNCTION__", function() {
    expect(parser.parseEval('__FUNCTION__;')).toMatchSnapshot();
  });
  it("__CLASS__", function() {
    expect(parser.parseEval('__CLASS__;')).toMatchSnapshot();
  });
  it("__TRAIT__", function() {
    expect(parser.parseEval('__TRAIT__;')).toMatchSnapshot();
  });
  it("__METHOD__", function() {
    expect(parser.parseEval('__METHOD__;')).toMatchSnapshot();
  });
  it("__NAMESPACE__", function() {
    expect(parser.parseEval('__NAMESPACE__;')).toMatchSnapshot();
  });
});
