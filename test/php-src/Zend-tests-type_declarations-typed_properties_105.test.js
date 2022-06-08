// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_105.phpt
  it("Bug #77673 ReflectionClass::getDefaultProperties returns spooky array", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public B $c;\n}\n$class = new ReflectionClass(A::class);\n$defaults = $class->getDefaultProperties();\nvar_dump($defaults);\nvar_dump(array_key_exists('c', $defaults));\n?>")).toMatchSnapshot();
  });
});
