// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-tryFrom-unknown-hash.phpt
  it("BackedEnum::tryFrom() unknown hash", function () {
    expect(parser.parseCode("<?php\nenum Foo: string {\n    case Bar = 'B';\n}\n$s = 'A';\n$s++;\nvar_dump(Foo::tryFrom($s));\n?>")).toMatchSnapshot();
  });
});
