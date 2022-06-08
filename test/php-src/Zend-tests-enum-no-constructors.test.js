// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-constructors.phpt
  it("Enum disallows constructor", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    public function __construct() {}\n}\n?>")).toMatchSnapshot();
  });
});
