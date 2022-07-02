// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__get.phpt
  it("Enum __get", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function __get(string $name)\n    {\n        return '__get';\n    }\n}\n?>")).toMatchSnapshot();
  });
});
