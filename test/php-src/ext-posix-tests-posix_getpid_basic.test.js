// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpid_basic.phpt
  it("Test posix_getpid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getpid function\\n\";\n  $pid = posix_getpid();\n  var_dump($pid);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
