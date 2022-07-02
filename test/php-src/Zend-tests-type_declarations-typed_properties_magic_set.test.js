// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_magic_set.phpt
  it("__set() should not be invoked when setting an uninitialized typed property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $foo;\n    public function __get($name) {\n        echo \"__get \", $name, \"\\n\";\n        return null;\n    }\n    public function __set($name, $value) {\n        echo \"__set \", $name, \" = \", $value, \"\\n\";\n    }\n    public function __isset($name) {\n        echo \"__isset \", $name, \"\\n\";\n        return true;\n    }\n    public function __unset($name) {\n        echo \"__unset \", $name, \"\\n\";\n    }\n}\n$test = new Test;\ntry {\n    var_dump($test->foo);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(isset($test->foo));\n$test->foo = 42;\nvar_dump($test->foo);\n// __set will be called after unset()\nunset($test->foo);\n$test->foo = 42;\n// __set will be called after unset() without prior initialization\n$test = new Test;\nunset($test->foo);\n$test->foo = 42;\nclass Test2 extends Test {\n}\n// Check that inherited properties work correctly\n$test = new Test;\n$test->foo = 42;\nvar_dump($test->foo);\nunset($test->foo);\n$test->foo = 42;\n// Test that cloning works correctly\n$test = clone $test;\n$test->foo = 42;\n$test = clone new Test;\n$test->foo = 42;\nvar_dump($test->foo);\nunset($test->foo);\n$test->foo = 42;\n?>")).toMatchSnapshot();
  });
});
