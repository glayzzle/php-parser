// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getsid.phpt
  it("Test posix_getsid() function test", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_getsid() : function test ***\\n\";\n$pid = posix_getpid();\necho \"\\n-- Testing posix_getsid() function with current process pid --\\n\";\nvar_dump( is_long(posix_getsid($pid)) );\n?>")).toMatchSnapshot();
  });
});
