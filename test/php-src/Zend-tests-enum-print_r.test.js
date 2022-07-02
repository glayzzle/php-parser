// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/print_r.phpt
  it("Enum print_r", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum IntFoo: int {\n    case Bar = 42;\n}\nenum StringFoo: string {\n    case Bar = 'Bar';\n}\nprint_r(Foo::Bar);\nprint_r(IntFoo::Bar);\nprint_r(StringFoo::Bar);\n?>")).toMatchSnapshot();
  });
});
