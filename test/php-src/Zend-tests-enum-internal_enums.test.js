// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/internal_enums.phpt
  it("Internal enums", function () {
    expect(parser.parseCode("<?php\nvar_dump($bar = ZendTestUnitEnum::Bar);\nvar_dump($bar === ZendTestUnitEnum::Bar);\nvar_dump($bar instanceof UnitEnum);\nvar_dump($foo = zend_get_unit_enum());\nvar_dump($foo === ZendTestUnitEnum::Foo);\nvar_dump(ZendTestUnitEnum::cases());\necho \"\\n\";\nvar_dump($foo = ZendTestStringEnum::Foo);\nvar_dump($foo instanceof BackedEnum);\nvar_dump(ZendTestStringEnum::Foo->value);\nvar_dump($bar = ZendTestStringEnum::from(\"Test2\"));\nvar_dump($bar === ZendTestStringEnum::Bar);\nvar_dump(ZendTestStringEnum::tryFrom(\"Test3\"));\nvar_dump(ZendTestStringEnum::tryFrom(42));\nvar_dump(ZendTestStringEnum::tryFrom(43));\nvar_dump(ZendTestStringEnum::tryFrom(0));\nvar_dump(ZendTestStringEnum::cases());\nvar_dump($s = serialize($foo));\nvar_dump(unserialize($s));\nvar_dump(unserialize($s) === $foo);\n?>")).toMatchSnapshot();
  });
});
