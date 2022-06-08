// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_errno_variation2.phpt
  it("Test function posix_errno() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling function with pid error ***\\n\";\n// Don't rely on PCNTL extension being around\n$SIGKILL = 9;\nposix_kill((2 ** 22) + 1, $SIGKILL);\nvar_dump(posix_errno());\n?>")).toMatchSnapshot();
  });
});
