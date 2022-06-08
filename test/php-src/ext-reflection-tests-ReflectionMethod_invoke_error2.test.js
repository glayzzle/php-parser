// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invoke_error2.phpt
  it("ReflectionMethod::invoke() further errors", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function methodWithArgs($a, $b) {\n        echo \"Called methodWithArgs($a, $b)\\n\";\n    }\n}\n$methodWithArgs = new ReflectionMethod('TestClass', 'methodWithArgs');\n$testClassInstance = new TestClass();\necho \"\\nMethod with args:\\n\";\nvar_dump($methodWithArgs->invoke($testClassInstance));\n?>")).toMatchSnapshot();
  });
});
