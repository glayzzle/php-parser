// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug67068.phpt
  it("Bug #67068 (ReflectionFunction::getClosure returns something that doesn't report as a closure)", function () {
    expect(parser.parseCode("<?php\nclass MyClass {\n    public function method() {}\n}\n$object = new MyClass;\n$reflector = new \\ReflectionMethod($object, 'method');\n$closure = $reflector->getClosure($object);\n$closureReflector = new \\ReflectionFunction($closure);\nvar_dump($closureReflector->isClosure());\n?>")).toMatchSnapshot();
  });
});
