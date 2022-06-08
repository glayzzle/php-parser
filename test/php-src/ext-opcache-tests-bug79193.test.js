// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug79193.phpt
  it("Bug #79193: Incorrect type inference for self::$field =& $field", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static $foo;\n    public static function method($bar) {\n        Test::$foo =& $bar;\n        var_dump(is_int($bar));\n    }\n}\nTest::method(1);\n?>")).toMatchSnapshot();
  });
});
