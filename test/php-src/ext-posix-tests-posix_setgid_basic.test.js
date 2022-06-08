// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_setgid_basic.phpt
  it("Test function posix_setgid() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments ***\\n\";\n$gid = posix_getgid();\nvar_dump(posix_setgid( $gid ) );\n?>")).toMatchSnapshot();
  });
});
