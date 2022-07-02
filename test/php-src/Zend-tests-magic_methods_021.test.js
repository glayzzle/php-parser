// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_021.phpt
  it("__set_state return type should support covariance", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function __set_state(array $data): self {}\n}\nclass Foo2 {\n    public static function __set_state(array $data): static {}\n}\nclass Foo3 {\n    public static function __set_state(array $data): Foo3|self {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
