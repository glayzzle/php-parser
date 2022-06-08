// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35630.phpt
  it("Bug #35630 (strtotime() crashes on non-separated relative modifiers)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime('5 january 2006+3day+1day')) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
