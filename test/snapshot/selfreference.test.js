const parser = require('../main');

describe("selfreference", function() {
  it("variable", function() {
    expect(parser.parseEval('self::$var;')).toMatchSnapshot();
  });
  it("constant", function() {
    expect(parser.parseEval('self::CONSTANT;')).toMatchSnapshot();
  });
  it("call", function() {
    expect(parser.parseEval('self::call();')).toMatchSnapshot();
  });
  it("uppercase", function() {
    expect(parser.parseEval('SELF::call();')).toMatchSnapshot();
  });
  it("parent", function() {
    expect(parser.parseEval('function fn(self $arg) {}')).toMatchSnapshot();
  });
  it("parent (uppercase)", function() {
    expect(parser.parseEval('function fn(SELF $arg) {}')).toMatchSnapshot();
  });
});
