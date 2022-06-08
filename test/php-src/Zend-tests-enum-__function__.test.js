// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__function__.phpt
  it("Enum __FUNCTION__", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function printFunction()\n    {\n        echo __FUNCTION__ . \"\\n\";\n    }\n}\nFoo::Bar->printFunction();\n?>")).toMatchSnapshot();
  });
});
