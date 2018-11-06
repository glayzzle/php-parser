const parser = require('../main');

describe("parentreference", function() {
  it("variable", function() {
    expect(parser.parseEval('parent::$var;')).toMatchSnapshot();
  });
  it("constant", function() {
    expect(parser.parseEval('parent::CONSTANT;')).toMatchSnapshot();
  });
  it("call", function() {
    expect(parser.parseEval('parent::call();')).toMatchSnapshot();
  });
  it("uppercase", function() {
    expect(parser.parseEval('PARENT::call();')).toMatchSnapshot();
  });
  it("parent", function() {
    expect(parser.parseEval('function fn(parent $arg) {}')).toMatchSnapshot();
  });
  it("parent (uppercase)", function() {
    expect(parser.parseEval('function fn(PARENT $arg) {}')).toMatchSnapshot();
  });
});
