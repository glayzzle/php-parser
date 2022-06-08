// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_019.phpt
  it("__unserialize first parameter must be an array", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __unserialize(string $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
