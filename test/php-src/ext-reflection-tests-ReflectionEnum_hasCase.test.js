// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_hasCase.phpt
  it("ReflectionEnum::hasCase()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    const Baz = self::Bar;\n}\n$reflectionEnum = new ReflectionEnum(Foo::class);\nvar_dump($reflectionEnum->hasCase('Bar'));\nvar_dump($reflectionEnum->hasCase('Baz'));\nvar_dump($reflectionEnum->hasCase('Qux'));\n?>")).toMatchSnapshot();
  });
});
