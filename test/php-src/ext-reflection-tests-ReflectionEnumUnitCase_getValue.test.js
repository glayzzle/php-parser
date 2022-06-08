// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnumUnitCase_getValue.phpt
  it("ReflectionEnumUnitCase::getValue()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n}\n$barFromReflection = (new ReflectionEnumUnitCase(Foo::class, 'Bar'))->getValue();\n$bazFromReflection = (new ReflectionEnumUnitCase(Foo::class, 'Baz'))->getValue();\nvar_dump($barFromReflection);\nvar_dump($bazFromReflection);\nvar_dump(Foo::Bar === $barFromReflection);\nvar_dump(Foo::Baz === $barFromReflection);\nvar_dump(Foo::Bar === $bazFromReflection);\nvar_dump(Foo::Baz === $bazFromReflection);\n?>")).toMatchSnapshot();
  });
});
