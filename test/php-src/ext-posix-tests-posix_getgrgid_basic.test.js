// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgrgid_basic.phpt
  it("Test posix_getgrgid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getgid and getgrid functions\\n\";\n  $gid = posix_getgid();\n  $groupinfo = posix_getgrgid($gid);\n  print_r($groupinfo);\n?>")).toMatchSnapshot();
  });
});
