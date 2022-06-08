// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-destruct.phpt
  it("Enum disallows destructor", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    public function __destruct() {}\n}\n?>")).toMatchSnapshot();
  });
});
