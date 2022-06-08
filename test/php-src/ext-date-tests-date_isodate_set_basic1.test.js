// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_isodate_set_basic1.phpt
  it("Test date_isodate_set() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing date_isodate_set() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n// Create a deate object\n$datetime = date_create(\"2009-01-30 17:57:32\");\n// Which month is week 40 ?\ndate_isodate_set($datetime, 2008, 40);\necho \"Week 40 of 2009 is in \\\"\" . date_format($datetime, \"F\") . \"\\\"\\n\";\n// What date is week  week 30 day 3 ?\ndate_isodate_set($datetime, 2009, 30, 3);\necho \"Week 30 day 3 of 2009 is \\\"\" . date_format($datetime, \"D M j\") . \"\\\"\\n\";\n// What date was is last year  ?\ndate_isodate_set($datetime, 2008, 30, 3);\necho \"..same day last year was \\\"\" . date_format($datetime, \"D M j\") . \"\\\"\\n\";\n?>")).toMatchSnapshot();
  });
});
