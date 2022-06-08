// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_setuid_basic.phpt
  it("Test function posix_setuid() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$myuid = posix_getuid();\n$uid = var_dump(posix_setuid( $myuid ) );\n?>")).toMatchSnapshot();
  });
});
