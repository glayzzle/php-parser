// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getsid_basic.phpt
  it("Test posix_getsid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of posix_getsid function\\n\";\n  $pid = posix_getpid();\n  $sid = posix_getsid($pid);\n  var_dump($sid);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
