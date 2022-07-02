// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/recursive_debug_info.phpt
  it("Test recursive __debugInfo() method", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __debugInfo() {\n        return [$this];\n    }\n}\nvar_dump(new Test);\n?>")).toMatchSnapshot();
  });
});
