// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69025.phpt
  it("Bug #69025 (Invalid read of size 4 when calling __callStatic)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function __callStatic($method, $args)\n    {\n    }\n}\nA::init();\n?>\nOK")).toMatchSnapshot();
  });
});
