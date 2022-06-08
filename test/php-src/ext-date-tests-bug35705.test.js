// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35705.phpt
  it("Bug #35705 (strtotime() fails to parse soap date format without TZ)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime('2000-10-10T10:12:30.000')) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
