// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-from-unknown-hash.phpt
  it("BackedEnum::from() unknown hash", function () {
    expect(parser.parseCode("<?php\nenum Foo: string {\n    case Bar = 'B';\n}\n$s = 'A';\n$s++;\nvar_dump(Foo::from($s));\n?>")).toMatchSnapshot();
  });
});
