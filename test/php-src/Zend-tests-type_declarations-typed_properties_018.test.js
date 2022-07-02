// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_018.phpt
  it("Test typed properties type applies to all props in group", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar,\n                $qux;\n}\n$reflector = new ReflectionClass(Foo::class);\n$prop = $reflector->getProperty(\"qux\");\nvar_dump($prop->getType()->getName());\n?>")).toMatchSnapshot();
  });
});
