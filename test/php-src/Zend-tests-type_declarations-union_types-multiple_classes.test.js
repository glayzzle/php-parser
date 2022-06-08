// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/multiple_classes.phpt
  it("Union types with multiple classes", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public X|Y|Z|int $prop;\n    public function method(X|Y|Z|int $arg): X|Y|Z|int {\n        return $arg;\n    }\n}\n// Check that nothing here triggers autoloading.\nspl_autoload_register(function($class) {\n    echo \"Loading $class\\n\";\n});\n$test = new Test;\n$test->prop = 42;\nvar_dump($test->prop);\nvar_dump($test->method(42));\n$test->prop = \"42\";\nvar_dump($test->prop);\nvar_dump($test->method(\"42\"));\ntry {\n    $test->prop = new stdClass;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->method(new stdClass);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nif (true) {\n    class X {}\n}\n$test->prop = new X;\nvar_dump($test->prop);\nvar_dump($test->method(new X));\nif (true) {\n    class Z {}\n}\n$test->prop = new Z;\nvar_dump($test->prop);\nvar_dump($test->method(new Z));\nif (true) {\n    class Y {}\n}\n$test->prop = new Y;\nvar_dump($test->prop);\nvar_dump($test->method(new Y));\n?>")).toMatchSnapshot();
  });
});
