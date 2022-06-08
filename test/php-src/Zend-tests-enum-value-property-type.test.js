// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/value-property-type.phpt
  it("Enum value property has automatic type", function () {
    expect(parser.parseCode("<?php\nenum IntEnum: int {\n    case Foo = 0;\n}\nenum StringEnum: string {\n    case Foo = 'Foo';\n}\necho (new ReflectionProperty(IntEnum::class, 'value'))->getType() . \"\\n\";\necho (new ReflectionProperty(StringEnum::class, 'value'))->getType() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
