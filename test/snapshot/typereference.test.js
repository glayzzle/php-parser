const parser = require("../main");

describe("typereference", function () {
  it("int (argument)", function () {
    expect(parser.parseEval("function foo(int $arg) {}")).toMatchSnapshot();
  });
  it("int (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(INT $arg) {}")).toMatchSnapshot();
  });
  it("int (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): int {}")).toMatchSnapshot();
  });
  it("int (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): INT {}")).toMatchSnapshot();
  });
  it("float (argument)", function () {
    expect(parser.parseEval("function foo(float $arg) {}")).toMatchSnapshot();
  });
  it("float (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(FLOAT $arg) {}")).toMatchSnapshot();
  });
  it("float (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): float {}")).toMatchSnapshot();
  });
  it("float (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): FLOAT {}")).toMatchSnapshot();
  });
  it("bool (argument)", function () {
    expect(parser.parseEval("function foo(bool $arg) {}")).toMatchSnapshot();
  });
  it("bool (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(BOOL $arg) {}")).toMatchSnapshot();
  });
  it("bool (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): bool {}")).toMatchSnapshot();
  });
  it("bool (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): BOOL {}")).toMatchSnapshot();
  });
  it("string (argument)", function () {
    expect(parser.parseEval("function foo(string $arg) {}")).toMatchSnapshot();
  });
  it("string (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(STRING $arg) {}")).toMatchSnapshot();
  });
  it("string (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): string {}")).toMatchSnapshot();
  });
  it("string (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): STRING {}")).toMatchSnapshot();
  });
  it("array (argument)", function () {
    expect(parser.parseEval("function foo(array $arg) {}")).toMatchSnapshot();
  });
  it("array (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(ARRAY $arg) {}")).toMatchSnapshot();
  });
  it("array (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): array {}")).toMatchSnapshot();
  });
  it("array (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): ARRAY {}")).toMatchSnapshot();
  });
  it("callable (argument)", function () {
    expect(
      parser.parseEval("function foo(callable $arg) {}")
    ).toMatchSnapshot();
  });
  it("callable (argument) (uppercase)", function () {
    expect(
      parser.parseEval("function foo(CALLABLE $arg) {}")
    ).toMatchSnapshot();
  });
  it("callable (return type declarations)", function () {
    expect(
      parser.parseEval("function foo($arg): callable {}")
    ).toMatchSnapshot();
  });
  it("callable (return type declarations) (uppercase)", function () {
    expect(
      parser.parseEval("function foo($arg): CALLABLE  {}")
    ).toMatchSnapshot();
  });
  it("object (argument)", function () {
    expect(parser.parseEval("function foo(object $arg) {}")).toMatchSnapshot();
  });
  it("object (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(OBJECT $arg) {}")).toMatchSnapshot();
  });
  it("object (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): object {}")).toMatchSnapshot();
  });
  it("object (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): OBJECT {}")).toMatchSnapshot();
  });
  it("iterable (argument)", function () {
    expect(
      parser.parseEval("function foo(iterable $arg) {}")
    ).toMatchSnapshot();
  });
  it("iterable (argument) (uppercase)", function () {
    expect(
      parser.parseEval("function foo(ITERABLE $arg) {}")
    ).toMatchSnapshot();
  });
  it("iterable (return type declarations)", function () {
    expect(
      parser.parseEval("function foo($arg): iterable {}")
    ).toMatchSnapshot();
  });
  it("iterable (return type declarations) (uppercase)", function () {
    expect(
      parser.parseEval("function foo($arg): ITERABLE {}")
    ).toMatchSnapshot();
  });
  it("void (argument)", function () {
    expect(parser.parseEval("function foo(void $arg) {}")).toMatchSnapshot();
  });
  it("void (argument) (uppercase)", function () {
    expect(parser.parseEval("function foo(VOID $arg) {}")).toMatchSnapshot();
  });
  it("void (return type declarations)", function () {
    expect(parser.parseEval("function foo($arg): void {}")).toMatchSnapshot();
  });
  it("void (return type declarations) (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): VOID {}")).toMatchSnapshot();
  });
  it("class", function () {
    expect(parser.parseEval("function foo(Foo $arg) {}")).toMatchSnapshot();
  });
  it("class (2)", function () {
    expect(
      parser.parseEval("function foo(Foo\\Foo $arg) {}")
    ).toMatchSnapshot();
  });
  it("class (3)", function () {
    expect(parser.parseEval("function foo($arg): Foo {}")).toMatchSnapshot();
  });
  it("class (4)", function () {
    expect(
      parser.parseEval("function foo($arg): Foo\\Foo {}")
    ).toMatchSnapshot();
  });
});
