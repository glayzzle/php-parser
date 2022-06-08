// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getDeclaringClass_basic.phpt
  it("ReflectionMethod::getDeclaringClass()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() {}\n}\nclass B extends A {\n    function bar() {}\n}\n$methodInfo = new ReflectionMethod('B', 'foo');\nvar_dump($methodInfo->getDeclaringClass());\n$methodInfo = new ReflectionMethod('B', 'bar');\nvar_dump($methodInfo->getDeclaringClass());\n?>")).toMatchSnapshot();
  });
});
