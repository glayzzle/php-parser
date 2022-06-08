// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__method__.phpt
  it("Enum __METHOD__", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function printMethod()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nFoo::Bar->printMethod();\n?>")).toMatchSnapshot();
  });
});
