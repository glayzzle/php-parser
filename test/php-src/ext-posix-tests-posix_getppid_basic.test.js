// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getppid_basic.phpt
  it("Test posix_getppid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getppid function\\n\";\n  $ppid = posix_getppid();\n  var_dump($ppid);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
