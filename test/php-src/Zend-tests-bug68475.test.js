// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68475.phpt
  it("Bug #68475 Calling function using $callable() syntax with strings of form 'Class::method'", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public static function staticMethod()\n    {\n        echo \"Static method called!\\n\";\n    }\n    public static function staticMethodWithArgs($arg1, $arg2, $arg3)\n    {\n        printf(\"Static method called with args: %s, %s, %s\\n\", $arg1, $arg2, $arg3);\n    }\n}\n// Test basic call using Class::method syntax.\n$callback = 'TestClass::staticMethod';\n$callback();\n// Case should not matter.\n$callback = 'testclass::staticmethod';\n$callback();\n$args = ['arg1', 'arg2', 'arg3'];\n$callback = 'TestClass::staticMethodWithArgs';\n// Test call with args.\n$callback($args[0], $args[1], $args[2]);\n// Test call with splat operator.\n$callback(...$args);\n// Reference undefined method.\n$callback = 'TestClass::undefinedMethod';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Reference undefined class.\n$callback = 'UndefinedClass::testMethod';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
