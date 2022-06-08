// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/mixed_type.phpt
  it("Test that the mixed type is reflectable", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public mixed $a;\n    public function test(mixed ...$a): mixed {}\n}\n$a = new A();\n$object = new ReflectionObject($a);\n$method = new ReflectionMethod($a, \"test\");\nvar_dump($object->getProperty(\"a\")->getType()->getName());\nvar_dump($method->getParameters()[0]->getType()->getName());\nvar_dump($method->getReturnType()->getName());\nvar_dump((string) $object->getProperty(\"a\")->getType());\nvar_dump((string) $method->getParameters()[0]->getType());\nvar_dump((string) $method->getReturnType());\n?>")).toMatchSnapshot();
  });
});
