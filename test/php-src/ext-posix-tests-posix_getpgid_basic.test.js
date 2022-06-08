// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpgid_basic.phpt
  it("Test posix_getpgid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of posix_getpgid function\\n\";\n  $pid = posix_getpid();\n  $pgid = posix_getpgid($pid);\n  var_dump($pgid);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
