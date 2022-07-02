// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/class_constant_static_deref.phpt
  it("Class constants can be used as a class name", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    const NAME = 'Test2';\n}\nclass Test2 {\n    const FOO = 42;\n    public static $foo = 42;\n    public static function foo() {\n        return 42;\n    }\n}\nvar_dump(Test::NAME::FOO);\nvar_dump(Test::NAME::$foo);\nvar_dump(Test::NAME::foo());\n?>")).toMatchSnapshot();
  });
});
