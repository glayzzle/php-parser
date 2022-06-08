// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnumUnitCase_getDocComment.phpt
  it("ReflectionEnumUnitCase::getDocComment()", function () {
    expect(parser.parseCode("<?php\n// enum cases should support doc comments, like class constants.\nenum Foo {\n    /** Example doc comment */\n    case Bar;\n    case Baz;\n}\nvar_dump((new ReflectionEnumUnitCase(Foo::class, 'Bar'))->getDocComment());\nvar_dump((new ReflectionEnumUnitCase(Foo::class, 'Baz'))->getDocComment());\nvar_dump((new ReflectionClassConstant(Foo::class, 'Bar'))->getDocComment());\nvar_dump((new ReflectionClassConstant(Foo::class, 'Baz'))->getDocComment());\n?>")).toMatchSnapshot();
  });
});
