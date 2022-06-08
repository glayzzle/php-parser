// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/mktime-1.phpt
  it("Check for mktime with out-of-range parameters", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Amsterdam\");\n# MacOS/X libc implementation doesn't treat out-of-range values\n# the same way other unices do (Bug# 10686) so some extra code\n# was added to datetime.c to take care of this\necho date(\"Y-m-d\", mktime( 12, 0, 0, 3,  0, 2000)) .\"\\n\";\necho date(\"Y-m-d\", mktime( 12, 0, 0, 3, -1, 2000)) .\"\\n\";\necho date(\"Y-m-d\", mktime( 12, 0, 0, 2, 29, 2000)) .\"\\n\";\necho date(\"Y-m-d\", mktime( 12, 0, 0, 3,  0, 2001)) .\"\\n\";\necho date(\"Y-m-d\", mktime( 12, 0, 0, 2, 29, 2001)) .\"\\n\";\necho date(\"Y-m-d\", mktime( 12, 0, 0, 0,  0, 2000)) .\"\\n\";\n?>")).toMatchSnapshot();
  });
});
