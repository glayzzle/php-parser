// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_returnsReference_basic.phpt
  it("ReflectionMethod::returnsReference()", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function &foo() {\n    }\n    private function bar() {\n    }\n}\n$methodInfo = new ReflectionMethod('TestClass::foo');\nvar_dump($methodInfo->returnsReference());\n$methodInfo = new ReflectionMethod('TestClass::bar');\nvar_dump($methodInfo->returnsReference());\n?>")).toMatchSnapshot();
  });
});
