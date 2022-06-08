// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_return_inheritance_success2.phpt
  it("Test that a mixed return type can be overridden by any single (and nullable) type except void", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(): mixed {}\n}\nclass Bar1 extends Foo\n{\n    public function method(): bool {}\n}\nclass Bar2 extends Foo\n{\n    public function method(): int {}\n}\nclass Bar3 extends Foo\n{\n    public function method(): float {}\n}\nclass Bar4 extends Foo\n{\n    public function method(): string {}\n}\nclass Bar5 extends Foo\n{\n    public function method(): array {}\n}\nclass Bar6 extends Foo\n{\n    public function method(): object {}\n}\nclass Bar7 extends Foo\n{\n    public function method(): stdClass {}\n}\nclass Bar8 extends Foo\n{\n    public function method(): ?int {}\n}\nclass Bar9 extends Foo\n{\n    public function method(): ?stdClass {}\n}\n?>")).toMatchSnapshot();
  });
});
