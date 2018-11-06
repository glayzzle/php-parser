const parser = require('../main');

describe("typereference", function() {
  it("int", function() {
    expect(parser.parseEval('function fn(int $arg) {}')).toMatchSnapshot();
  });
  it("int (uppercase)", function() {
    expect(parser.parseEval('function fn(INT $arg) {}')).toMatchSnapshot();
  });
  it("float", function() {
    expect(parser.parseEval('function fn(float $arg) {}')).toMatchSnapshot();
  });
  it("float (uppercase)", function() {
    expect(parser.parseEval('function fn(FLOAT $arg) {}')).toMatchSnapshot();
  });
  it("bool", function() {
    expect(parser.parseEval('function fn(bool $arg) {}')).toMatchSnapshot();
  });
  it("bool (uppercase)", function() {
    expect(parser.parseEval('function fn(BOOL $arg) {}')).toMatchSnapshot();
  });
  it("string", function() {
    expect(parser.parseEval('function fn(string $arg) {}')).toMatchSnapshot();
  });
  it("string (uppercase)", function() {
    expect(parser.parseEval('function fn(STRING $arg) {}')).toMatchSnapshot();
  });
  it("array", function() {
    expect(parser.parseEval('function fn(array $arg) {}')).toMatchSnapshot();
  });
  it("array (uppercase)", function() {
    expect(parser.parseEval('function fn(ARRAY $arg) {}')).toMatchSnapshot();
  });
  it("callable", function() {
    expect(parser.parseEval('function fn(callable $arg) {}')).toMatchSnapshot();
  });
  it("callable (uppercase)", function() {
    expect(parser.parseEval('function fn(CALLABLE $arg) {}')).toMatchSnapshot();
  });
  it("object", function() {
    expect(parser.parseEval('function fn(object $arg) {}')).toMatchSnapshot();
  });
  it("object (uppercase)", function() {
    expect(parser.parseEval('function fn(OBJECT $arg) {}')).toMatchSnapshot();
  });
  it("iterable", function() {
    expect(parser.parseEval('function fn(iterable $arg) {}')).toMatchSnapshot();
  });
  it("iterable (uppercase)", function() {
    expect(parser.parseEval('function fn(ITERABLE $arg) {}')).toMatchSnapshot();
  });
  it("class", function() {
    expect(parser.parseEval('function fn(Foo $arg) {}')).toMatchSnapshot();
  });
  it("class (2)", function() {
    expect(parser.parseEval('function fn(Foo\\Foo $arg) {}')).toMatchSnapshot();
  });
});
