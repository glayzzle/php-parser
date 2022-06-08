// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/direct_static_member_access.phpt
  it("Direct access to static trait members is deprecated", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public static $foo;\n    public static function foo() {\n        echo \"Foo\\n\";\n    }\n    public static function __callStatic($name, $args) {\n        echo \"CallStatic($name)\\n\";\n    }\n}\nclass C {\n    use T;\n}\nfunction test() {\n    T::$foo = 42;\n    var_dump(T::$foo);\n    T::foo();\n    T::bar();\n    echo \"\\n\";\n}\n// Call twice to test cache slot behavior.\ntest();\ntest();\nC::$foo = 42;\nvar_dump(C::$foo);\nC::foo();\nC::bar();\n?>")).toMatchSnapshot();
  });
});
