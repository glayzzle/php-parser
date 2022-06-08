// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/instanceof-backed-enum.phpt
  it("Auto implement BackedEnum interface", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum Baz: int {\n    case Qux = 0;\n}\nvar_dump(Foo::Bar instanceof BackedEnum);\nvar_dump(Baz::Qux instanceof BackedEnum);\n?>")).toMatchSnapshot();
  });
});
