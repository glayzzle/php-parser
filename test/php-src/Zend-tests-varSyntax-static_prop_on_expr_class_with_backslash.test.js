// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/static_prop_on_expr_class_with_backslash.phpt
  it("Static property on constexpr class with leading backslash", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static $b = 42;\n}\nvar_dump(('\\A' . (string) '')::$b);\n?>")).toMatchSnapshot();
  });
});
