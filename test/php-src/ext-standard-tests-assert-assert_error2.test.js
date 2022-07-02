// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_error2.phpt
  it("assert() - basic - Test that bailout works", function () {
    expect(parser.parseCode("<?php\nfunction f1($script, $line, $message, $user_message)\n{\n    echo \"f1 called\\n\";\n}\n//bail out on error\nvar_dump($rao = assert_options(ASSERT_BAIL, 1));\nvar_dump($r2 = assert(0 != 0));\necho \"If this is printed BAIL hasn't worked\";\n?>")).toMatchSnapshot();
  });
});
