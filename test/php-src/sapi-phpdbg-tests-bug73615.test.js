// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug73615.phpt
  it("Bug #73615 (phpdbg without option never load .phpdbginit at startup)", function () {
    expect(parser.parseCode("<?php\n$phpdbg = getenv('TEST_PHPDBG_EXECUTABLE');\nchdir(__DIR__.\"/bug73615\");\nprint `$phpdbg -qn`;\n?>")).toMatchSnapshot();
  });
});
