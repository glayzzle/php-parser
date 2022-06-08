// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic3.phpt
  it("assert() - basic - Test that bailout works", function () {
    expect(parser.parseCode("<?php\nfunction f1()\n{\n    echo \"f1 called\\n\";\n}\n//bail out on error\nvar_dump($rao=assert_options(ASSERT_BAIL, 1));\nvar_dump($r2=assert(0 != 0));\necho \"If this is printed BAIL hasn't worked\";\n?>")).toMatchSnapshot();
  });
});
