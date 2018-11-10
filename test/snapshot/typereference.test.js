const parser = require('../main');

describe("typereference", function() {
  it("int (argument)", function() {
    expect(parser.parseEval('function fn(int $arg) {}')).toMatchSnapshot();
  });
  it("int (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(INT $arg) {}')).toMatchSnapshot();
  });
  it("int (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): int {}')).toMatchSnapshot();
  });
  it("int (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): INT {}')).toMatchSnapshot();
  });
  it("float (argument)", function() {
    expect(parser.parseEval('function fn(float $arg) {}')).toMatchSnapshot();
  });
  it("float (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(FLOAT $arg) {}')).toMatchSnapshot();
  });
  it("float (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): float {}')).toMatchSnapshot();
  });
  it("float (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): FLOAT {}')).toMatchSnapshot();
  });
  it("bool (argument)", function() {
    expect(parser.parseEval('function fn(bool $arg) {}')).toMatchSnapshot();
  });
  it("bool (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(BOOL $arg) {}')).toMatchSnapshot();
  });
  it("bool (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): bool {}')).toMatchSnapshot();
  });
  it("bool (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): BOOL {}')).toMatchSnapshot();
  });
  it("string (argument)", function() {
    expect(parser.parseEval('function fn(string $arg) {}')).toMatchSnapshot();
  });
  it("string (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(STRING $arg) {}')).toMatchSnapshot();
  });
  it("string (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): string {}')).toMatchSnapshot();
  });
  it("string (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): STRING {}')).toMatchSnapshot();
  });
  it("array (argument)", function() {
    expect(parser.parseEval('function fn(array $arg) {}')).toMatchSnapshot();
  });
  it("array (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(ARRAY $arg) {}')).toMatchSnapshot();
  });
  it("array (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): array {}')).toMatchSnapshot();
  });
  it("array (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): ARRAY {}')).toMatchSnapshot();
  });
  it("callable (argument)", function() {
    expect(parser.parseEval('function fn(callable $arg) {}')).toMatchSnapshot();
  });
  it("callable (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(CALLABLE $arg) {}')).toMatchSnapshot();
  });
  it("callable (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): callable {}')).toMatchSnapshot();
  });
  it("callable (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): CALLABLE  {}')).toMatchSnapshot();
  });
  it("object (argument)", function() {
    expect(parser.parseEval('function fn(object $arg) {}')).toMatchSnapshot();
  });
  it("object (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(OBJECT $arg) {}')).toMatchSnapshot();
  });
  it("object (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): object {}')).toMatchSnapshot();
  });
  it("object (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): OBJECT {}')).toMatchSnapshot();
  });
  it("iterable (argument)", function() {
    expect(parser.parseEval('function fn(iterable $arg) {}')).toMatchSnapshot();
  });
  it("iterable (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(ITERABLE $arg) {}')).toMatchSnapshot();
  });
  it("iterable (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): iterable {}')).toMatchSnapshot();
  });
  it("iterable (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): ITERABLE {}')).toMatchSnapshot();
  });
  it("void (argument)", function() {
    expect(parser.parseEval('function fn(void $arg) {}')).toMatchSnapshot();
  });
  it("void (argument) (uppercase)", function() {
    expect(parser.parseEval('function fn(VOID $arg) {}')).toMatchSnapshot();
  });
  it("void (return type declarations)", function() {
    expect(parser.parseEval('function fn($arg): void {}')).toMatchSnapshot();
  });
  it("void (return type declarations) (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): VOID {}')).toMatchSnapshot();
  });
  it("class", function() {
    expect(parser.parseEval('function fn(Foo $arg) {}')).toMatchSnapshot();
  });
  it("class (2)", function() {
    expect(parser.parseEval('function fn(Foo\\Foo $arg) {}')).toMatchSnapshot();
  });
  it("class (3)", function() {
    expect(parser.parseEval('function fn($arg): Foo {}')).toMatchSnapshot();
  });
  it("class (4)", function() {
    expect(parser.parseEval('function fn($arg): Foo\\Foo {}')).toMatchSnapshot();
  });
});
