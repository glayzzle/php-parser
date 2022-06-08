// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_return_inheritance_success3.phpt
  it("Test that a mixed return type can be overridden by any union return type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(): mixed {}\n}\nclass Bar1 extends Foo\n{\n    public function method(): bool|int|null {}\n}\nclass Bar3 extends Foo\n{\n    public function method(): bool|int|float|string|array|object|null {}\n}\nclass Bar4 extends Foo\n{\n    public function method(): stdClass|Foo {}\n}\n?>")).toMatchSnapshot();
  });
});
