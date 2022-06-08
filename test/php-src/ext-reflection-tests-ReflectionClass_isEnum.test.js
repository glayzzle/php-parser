// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isEnum.phpt
  it("Testing ReflectionClass::isEnum()", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nenum Bar {\n    case Baz;\n}\n$fooReflection = new ReflectionClass(Foo::class);\n$barReflection = new ReflectionClass(Bar::class);\nvar_dump($fooReflection->isEnum());\nvar_dump($barReflection->isEnum());\n?>")).toMatchSnapshot();
  });
});
