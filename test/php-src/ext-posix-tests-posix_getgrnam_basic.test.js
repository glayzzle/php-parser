// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgrnam_basic.phpt
  it("Test posix_getgrnam() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  $groupid = posix_getgroups()[0];\n  $group = posix_getgrgid($groupid);\n  $groupinfo = posix_getgrnam($group[\"name\"]);\n  var_dump($groupinfo);\n  $groupinfo = posix_getgrnam(\"\");\n  var_dump($groupinfo);\n?>")).toMatchSnapshot();
  });
});
