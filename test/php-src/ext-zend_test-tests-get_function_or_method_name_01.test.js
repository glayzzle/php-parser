// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/get_function_or_method_name_01.phpt
  it("get_function_or_method_name when included file is scoped", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public static function bar()\n    {\n        return require 'get_function_or_method_name_01.inc';\n    }\n}\nvar_dump(Foo::bar());\n?>")).toMatchSnapshot();
  });
});
