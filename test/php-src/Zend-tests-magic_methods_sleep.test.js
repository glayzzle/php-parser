// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_sleep.phpt
  it("__sleep cannot take arguments", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __sleep(string $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
