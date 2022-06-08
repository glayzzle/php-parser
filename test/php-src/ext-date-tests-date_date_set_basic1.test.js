// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_date_set_basic1.phpt
  it("Test date_date_set() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_date_set() : basic functionality ***\\n\";\n$datetime = date_create(\"2009-01-30 19:34:10\");\necho date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_date_set($datetime, 2008, 02, 01);\necho date_format($datetime, DATE_RFC2822) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
