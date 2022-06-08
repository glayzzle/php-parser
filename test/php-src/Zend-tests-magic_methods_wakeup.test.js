// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_wakeup.phpt
  it("__wakeup cannot take arguments", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __wakeup(string $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
