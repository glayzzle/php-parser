// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41709.phpt
  it("Bug #41709 (strtotime() does not handle 00.00.0000)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$date_string = '00.00.0000 - 00:00:00';\nprint_r(date_parse($date_string));\n?>")).toMatchSnapshot();
  });
});
