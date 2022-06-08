// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_seteuid_basic.phpt
  it("Test function posix_seteuid() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$myuid = posix_geteuid();\n$uid = var_dump(posix_seteuid( $myuid ) );\n?>")).toMatchSnapshot();
  });
});
