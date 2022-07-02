// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/name-property.phpt
  it("Enum name property", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n}\nenum IntFoo: int {\n    case Bar = 0;\n    case Baz = 1;\n}\nvar_dump((new ReflectionClass(Foo::class))->getProperties());\nvar_dump(Foo::Bar->name);\nvar_dump((new ReflectionClass(IntFoo::class))->getProperties());\nvar_dump(IntFoo::Bar->name);\n?>")).toMatchSnapshot();
  });
});
