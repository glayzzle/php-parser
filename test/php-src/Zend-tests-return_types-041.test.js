// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/041.phpt
  it("__wakeup can only declare return void", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __wakeup(): bool {}\n}\n?>")).toMatchSnapshot();
  });
});
