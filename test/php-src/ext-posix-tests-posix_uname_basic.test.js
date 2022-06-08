// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_uname_basic.phpt
  it("Test posix_uname() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX uname function\\n\";\n  $uname = posix_uname();\n  unset($uname['domainname']);\n  print_r($uname);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
