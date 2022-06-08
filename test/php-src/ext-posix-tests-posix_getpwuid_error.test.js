// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpwuid_error.phpt
  it("Test posix_getpwuid() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_getpwuid() : error conditions ***\\n\";\necho \"\\n-- Testing posix_getpwuid() function negative uid --\\n\";\n$uid = -99;\nvar_dump( posix_getpwuid($uid) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
