// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpgrp_basic.phpt
  it("Test posix_getpgrp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getpgrp function\\n\";\n  $pgrp = posix_getpgrp();\n  var_dump($pgrp);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
