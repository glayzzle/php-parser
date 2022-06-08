// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35499.phpt
  it("Bug #35499 (strtotime() does not handle whitespace around the date string)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime(\"11/20/2005 8:00 AM \\r\\n\")) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"  11/20/2005 8:00 AM \\r\\n\")) . \"\\n\";\nvar_dump(date_parse(\" a \"));\nvar_dump(date_parse(\" \\n \"));\n?>")).toMatchSnapshot();
  });
});
