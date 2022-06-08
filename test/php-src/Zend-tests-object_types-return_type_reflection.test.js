// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/return_type_reflection.phpt
  it("Reflecting object return type", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a() : object;\n}\nclass Two implements One {\n    public function a() : object {}\n}\nfunction a() : object {}\n$returnTypeOne = (new ReflectionClass(One::class))->getMethod('a')->getReturnType();\nvar_dump($returnTypeOne->isBuiltin(), $returnTypeOne->getName());\n$returnTypeTwo = (new ReflectionClass(Two::class))->getMethod('a')->getReturnType();\nvar_dump($returnTypeTwo->isBuiltin(), $returnTypeTwo->getName());\n$returnTypea = (new ReflectionFunction('a'))->getReturnType();\nvar_dump($returnTypea->isBuiltin(), $returnTypea->getName());\n?>")).toMatchSnapshot();
  });
});
