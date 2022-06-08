// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_errno_basic.phpt
  it("Test function posix_errno() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments ***\\n\";\n// test without any error\nvar_dump(posix_errno());\n?>")).toMatchSnapshot();
  });
});
