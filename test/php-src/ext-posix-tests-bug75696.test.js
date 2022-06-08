// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/bug75696.phpt
  it("Bug #75696 (posix_getgrnam fails to print details of group)", function () {
    expect(parser.parseCode("<?php\n$gid = posix_getgid();\n$name = posix_getgrgid($gid)['name'];\n$info = posix_getgrnam($name);\nvar_dump(is_array($info));\n?>")).toMatchSnapshot();
  });
});
