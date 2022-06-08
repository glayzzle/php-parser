// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getPrototype_basic.phpt
  it("public ReflectionMethod ReflectionMethod::getPrototype ( void );", function () {
    expect(parser.parseCode("<?php\nclass Hello {\n    public function sayHelloTo($name) {\n        return 'Hello ' . $name;\n    }\n}\nclass HelloWorld extends Hello {\n    public function sayHelloTo($name) {\n        return 'Hello world: ' . $name;\n    }\n}\n$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');\nvar_dump($reflectionMethod->getPrototype());\n?>")).toMatchSnapshot();
  });
});
