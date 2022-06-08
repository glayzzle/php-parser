// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41842.phpt
  it("Bug #41842 (Cannot create years < 0100 & negative years with date_create or new DateTime)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$date = new DateTime('-2007-06-28 00:00:00');\necho $date->format(DATE_ISO8601);\n?>")).toMatchSnapshot();
  });
});
