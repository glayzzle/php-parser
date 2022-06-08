// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_errno_variation1.phpt
  it("Test function posix_errno() by calling it with with permission error", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling function with permission error ***\\n\";\nposix_setuid(0);\nvar_dump(posix_errno());\n?>")).toMatchSnapshot();
  });
});
