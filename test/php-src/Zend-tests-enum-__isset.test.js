// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__isset.phpt
  it("Enum __isset", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function __isset($property) {\n        return true;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
