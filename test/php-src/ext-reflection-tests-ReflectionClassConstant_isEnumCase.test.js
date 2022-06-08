// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClassConstant_isEnumCase.phpt
  it("ReflectionClassConstant::isEnumCase()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    const Baz = self::Bar;\n}\nclass Qux {\n    const Quux = 0;\n}\nvar_dump((new ReflectionClassConstant(Foo::class, 'Bar'))->isEnumCase());\nvar_dump((new ReflectionClassConstant(Foo::class, 'Baz'))->isEnumCase());\nvar_dump((new ReflectionClassConstant(Qux::class, 'Quux'))->isEnumCase());\n?>")).toMatchSnapshot();
  });
});
