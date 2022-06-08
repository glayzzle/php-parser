// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/no_static_arg_binding.phpt
  it("Don't statically bind arguments for self:: calls in traits", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public static function method($arg) {\n    }\n    public static function call() {\n        $i = 0;\n        self::method($i);\n        var_dump($i);\n    }\n}\nclass C {\n    use T;\n    public static function method(&$arg) {\n        $arg++;\n    }\n}\nC::call();\n?>")).toMatchSnapshot();
  });
});
