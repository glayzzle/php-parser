// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_022.phpt
  it("ZE2 Late Static Binding parent::/self:: forwarding and __callStatic", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function test() {\n        echo \"A\\n\";\n    }\n    static function __callstatic($name, $args) {\n        call_user_func(\"static::test\");\n    }\n}\nclass B extends A {\n    static function test() {\n        echo \"B\\n\";\n    }\n    static function __callstatic($name, $args) {\n        parent::__callstatic($name, $args);\n        call_user_func_array(\"parent::__callstatic\", array($name, $args));\n        parent::foo();\n        call_user_func_array(\"parent::foo\", $args);\n        call_user_func_array(array(\"parent\",\"foo\"), $args);\n    }\n}\nB::foo();\n?>")).toMatchSnapshot();
  });
});
