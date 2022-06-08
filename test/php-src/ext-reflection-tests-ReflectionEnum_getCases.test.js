// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_getCases.phpt
  it("ReflectionEnum::getCases()", function () {
    expect(parser.parseCode("<?php\nenum Enum_ {\n    case Foo;\n    case Bar;\n    const Baz = self::Bar;\n}\nenum IntEnum: int {\n  case Foo = 0;\n  case Bar = 1;\n  const Baz = self::Bar;\n}\nvar_dump((new ReflectionEnum(Enum_::class))->getCases());\nvar_dump((new ReflectionEnum(IntEnum::class))->getCases());\n?>")).toMatchSnapshot();
  });
});
