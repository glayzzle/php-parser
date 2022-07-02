// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_006.phpt
  it("Null coalesce assign with memoized constant operand that is later interned (OSS-Fuzz #17903)", function () {
    expect(parser.parseCode("<?php\n$foo[__DIR__] ??= 42;\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
