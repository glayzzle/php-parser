// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_getBackingType.phpt
  it("ReflectionEnum::getBackingType()", function () {
    expect(parser.parseCode("<?php\nenum Enum_ {}\nenum IntEnum: int {}\nenum StringEnum: string {}\nfunction test(): string {}\nvar_dump((new ReflectionEnum(Enum_::class))->getBackingType());\necho (new ReflectionEnum(IntEnum::class))->getBackingType() . \"\\n\";\necho (new ReflectionEnum(StringEnum::class))->getBackingType() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
