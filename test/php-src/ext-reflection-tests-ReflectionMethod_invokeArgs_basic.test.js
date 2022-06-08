// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invokeArgs_basic.phpt
  it("ReflectionMethod::invokeArgs()", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public $prop = 2;\n    public function foo() {\n        echo \"Called foo(), property = $this->prop\\n\";\n        var_dump($this);\n        return \"Return Val\";\n    }\n    public function willThrow() {\n        throw new Exception(\"Called willThrow()\");\n    }\n    public function methodWithArgs($a, $b) {\n        echo \"Called methodWithArgs($a, $b)\\n\";\n    }\n}\n$testClassInstance = new TestClass();\n$testClassInstance->prop = \"Hello\";\n$foo = new ReflectionMethod($testClassInstance, 'foo');\n$methodWithArgs = new ReflectionMethod('TestClass', 'methodWithArgs');\n$methodThatThrows = new ReflectionMethod(\"TestClass::willThrow\");\necho \"Public method:\\n\";\nvar_dump($foo->invokeArgs($testClassInstance, array()));\nvar_dump($foo->invokeArgs($testClassInstance, array(true)));\necho \"\\nMethod with args:\\n\";\nvar_dump($methodWithArgs->invokeArgs($testClassInstance, array(1, \"arg2\")));\nvar_dump($methodWithArgs->invokeArgs($testClassInstance, array(1, \"arg2\", 3)));\necho \"\\nMethod that throws an exception:\\n\";\ntry {\n    $methodThatThrows->invokeArgs($testClassInstance, array());\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
