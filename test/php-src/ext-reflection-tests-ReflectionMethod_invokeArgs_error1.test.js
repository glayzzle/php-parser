// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invokeArgs_error1.phpt
  it("ReflectionMethod:invokeArgs() errors", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function methodWithArgs($a, $b) {\n        echo \"Called methodWithArgs($a, $b)\\n\";\n    }\n}\nabstract class AbstractClass {\n    abstract function foo();\n}\n$methodWithArgs = new ReflectionMethod('TestClass', 'methodWithArgs');\n$testClassInstance = new TestClass();\necho \"\\nMethod with args:\\n\";\nvar_dump($methodWithArgs->invokeArgs($testClassInstance, array()));\n?>")).toMatchSnapshot();
  });
});
