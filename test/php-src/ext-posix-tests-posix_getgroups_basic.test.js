// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgroups_basic.phpt
  it("Test posix_getgroups() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX getgroups\\n\";\n  $groups = posix_getgroups();\n  if (!is_array($groups)) {\n    echo \"TEST FAILED: \", posix_strerror(posix_get_last_error()), \"\\n\";\n  } else {\n    echo \"TEST PASSED\\n\";\n  }\n?>")).toMatchSnapshot();
  });
});
