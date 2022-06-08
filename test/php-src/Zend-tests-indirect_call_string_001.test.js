// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_string_001.phpt
  it("Indirect call with 'Class::method' syntax with class in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace TestNamespace\n{\n    class TestClass\n    {\n        public static function staticMethod()\n        {\n            echo \"Static method called!\\n\";\n        }\n        public static function staticMethodWithArgs($arg1, $arg2, $arg3)\n        {\n            printf(\"Static method called with args: %s, %s, %s\\n\", $arg1, $arg2, $arg3);\n        }\n    }\n}\nnamespace CallNamespace\n{\n    // Test basic call using Class::method syntax.\n    $callback = 'TestNamespace\\TestClass::staticMethod';\n    $callback();\n    // Case should not matter.\n    $callback = 'testnamespace\\testclass::staticmethod';\n    $callback();\n    $args = ['arg1', 'arg2', 'arg3'];\n    $callback = 'TestNamespace\\TestClass::staticMethodWithArgs';\n    // Test call with args.\n    $callback($args[0], $args[1], $args[2]);\n    // Test call with splat operator.\n    $callback(...$args);\n}\n?>")).toMatchSnapshot();
  });
});
