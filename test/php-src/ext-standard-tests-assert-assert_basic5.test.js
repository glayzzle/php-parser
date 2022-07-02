// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic5.phpt
  it("assert() - basic - check switch on warnings using assert_options.", function () {
    expect(parser.parseCode("<?php\nfunction f1()\n{\n    echo \"f1 called\\n\";\n}\n//switch warning on and test return value\nvar_dump($rao=assert_options(ASSERT_WARNING, 1));\nvar_dump($r2=assert(0 != 0));\nvar_dump($r2=assert(0 == 0));\n//switch warning on and test return value\nvar_dump($rao=assert_options(ASSERT_WARNING, 0));\n?>")).toMatchSnapshot();
  });
});
