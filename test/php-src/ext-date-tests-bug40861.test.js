// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug40861.phpt
  it("Bug #40861 (Multiple +/- on relative units breaks strtotime())", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$offset = +60;\n$ts = strtotime('2000-01-01 12:00:00');\n$result = date(\"Y-m-d H:i:s\", strtotime(\"+$offset minutes\", $ts));\necho $result . \"\\n\";\n$offset = -60;\n$ts = strtotime('2000-01-01 12:00:00');\n$result = date(\"Y-m-d H:i:s\", strtotime(\"+$offset minutes\", $ts));\necho $result . \"\\n\";\n$offset = -60;\n$ts = strtotime('2000-01-01 12:00:00');\n$result = date(\"Y-m-d H:i:s\", strtotime(\"-$offset minutes\", $ts));\necho $result . \"\\n\";\n$offset = 60;\n$ts = strtotime('2000-01-01 12:00:00');\n$result = date(\"Y-m-d H:i:s\", strtotime(\"+$offset minutes\", $ts));\necho $result . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
