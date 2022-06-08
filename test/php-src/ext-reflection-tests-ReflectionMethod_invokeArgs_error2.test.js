// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invokeArgs_error2.phpt
  it("ReflectionMethod::invokeArgs() further errors", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function foo() {\n        echo \"Called foo()\\n\";\n        var_dump($this);\n        return \"Return Val\";\n    }\n}\n$foo = new ReflectionMethod('TestClass', 'foo');\n$testClassInstance = new TestClass();\ntry {\n    var_dump($foo->invokeArgs($testClassInstance, true));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
