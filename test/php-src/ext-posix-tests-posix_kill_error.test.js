// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_kill_error.phpt
  it("Test posix_kill() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_kill() : error conditions ***\\n\";\necho \"\\n-- Testing posix_kill() function with invalid signal --\\n\";\n$pid = posix_getpid();\n$sig = 999;\nvar_dump( posix_kill($pid, 999) );\necho \"\\n-- Testing posix_kill() function with negative pid --\\n\";\n$pid = -999;\n$sig = 9;\nvar_dump( posix_kill($pid, 999) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
