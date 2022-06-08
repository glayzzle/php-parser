// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__class__.phpt
  it("Enum __CLASS__", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function printClass()\n    {\n        echo __CLASS__ . \"\\n\";\n    }\n}\nFoo::Bar->printClass();\n?>")).toMatchSnapshot();
  });
});
