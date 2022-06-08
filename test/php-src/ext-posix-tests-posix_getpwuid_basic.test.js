// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpwuid_basic.phpt
  it("Test posix_getpwuid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getpwuid\\n\";\n  $pwuid = posix_getpwuid(posix_getuid());\n  print_r($pwuid);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
