// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-int.phpt
  it("Int enum value", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n    case Baz = 1;\n}\nvar_dump(Foo::Bar->value);\nvar_dump(Foo::Baz->value);\n?>")).toMatchSnapshot();
  });
});
