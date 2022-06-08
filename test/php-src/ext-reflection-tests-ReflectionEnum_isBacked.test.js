// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_isBacked.phpt
  it("ReflectionEnum::isBacked()", function () {
    expect(parser.parseCode("<?php\nenum Enum_ {}\nenum IntEnum: int {}\nenum StringEnum: string {}\nfunction test(): string {}\nvar_dump((new ReflectionEnum(Enum_::class))->isBacked());\nvar_dump((new ReflectionEnum(IntEnum::class))->isBacked());\nvar_dump((new ReflectionEnum(StringEnum::class))->isBacked());\n?>")).toMatchSnapshot();
  });
});
