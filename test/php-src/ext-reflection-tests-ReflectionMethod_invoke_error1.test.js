// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invoke_error1.phpt
  it("ReflectionMethod::invoke() errors", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public $prop = 2;\n    public function foo() {\n        echo \"Called foo(), property = $this->prop\\n\";\n        var_dump($this);\n        return \"Return Val\";\n    }\n    private static function privateMethod() {\n        echo \"Called privateMethod()\\n\";\n    }\n}\nabstract class AbstractClass {\n    abstract function foo();\n}\n$foo = new ReflectionMethod('TestClass', 'foo');\n$privateMethod = new ReflectionMethod(\"TestClass::privateMethod\");\n$testClassInstance = new TestClass();\n$testClassInstance->prop = \"Hello\";\necho \"invoke() on a non-object:\\n\";\ntry {\n    var_dump($foo->invoke(true));\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\necho \"\\ninvoke() on a non-instance:\\n\";\ntry {\n    var_dump($foo->invoke(new stdClass()));\n} catch (ReflectionException $e) {\n    var_dump($e->getMessage());\n}\necho \"\\nPrivate method:\\n\";\nvar_dump($privateMethod->invoke($testClassInstance));\necho \"\\nAbstract method:\\n\";\n$abstractMethod = new ReflectionMethod(\"AbstractClass::foo\");\ntry {\n    $abstractMethod->invoke(true);\n} catch (ReflectionException $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
