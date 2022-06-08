// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_inheritance_rules_non_trivial_01.phpt
  it("Magic Methods inheritance rules on a non-trivial class hierarchy", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __get(string|array $name): mixed {} // valid\n}\nclass B extends A {\n    public function __get(string|array|object $name): int {} // also valid\n}\nclass C extends B {\n    public function __get(string|array $name): int {} // this is invalid\n}\n?>")).toMatchSnapshot();
  });
});
