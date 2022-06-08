// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/type_hint_reflection.phpt
  it("Reflecting object type hint", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a(object $obj);\n}\nclass Two implements One {\n    public function a(object $obj) {}\n}\nfunction a(object $obj) {}\n$typeHintOne = (new ReflectionClass(One::class))->getMethod('a')->getParameters()[0]->getType();\nvar_dump($typeHintOne->isBuiltin(), $typeHintOne->getName());\n$typeHintTwo = (new ReflectionClass(Two::class))->getMethod('a')->getParameters()[0]->getType();\nvar_dump($typeHintTwo->isBuiltin(), $typeHintTwo->getName());\n$typeHinta = (new ReflectionFunction('a'))->getParameters()[0]->getType();\nvar_dump($typeHinta->isBuiltin(), $typeHinta->getName());\n?>")).toMatchSnapshot();
  });
});
