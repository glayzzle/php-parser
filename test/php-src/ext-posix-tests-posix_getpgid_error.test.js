// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpgid_error.phpt
  it("Test posix_getpgid() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_getpgid() : error conditions ***\\n\";\necho \"\\n-- Testing posix_getpgid() with negative pid  --\\n\";\n$pid = -99;\nvar_dump( posix_getpgid($pid) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
