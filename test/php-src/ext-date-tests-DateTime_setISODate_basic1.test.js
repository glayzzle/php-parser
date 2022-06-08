// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_setISODate_basic1.phpt
  it("Test DateTime::setISODate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTime::setISODate() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n// Create a deate object\n$datetime = new DateTime(\"2009-01-30 17:57:32\");\n// Which month is week 40 ?\n$datetime->setISODate(2008, 40);\necho \"Week 40 of 2009 is in \\\"\" . $datetime->format(\"F\") . \"\\\"\\n\";\n// What date is week  week 30 day 3 ?\n$datetime->setISODate(2009, 30, 3);\necho \"Week 30 day 3 of 2009 is \\\"\" . $datetime->format(\"D M j\") . \"\\\"\\n\";\n// What date was is last year  ?\n$datetime->setISODate(2008, 30, 3);\necho \"..same day last year was \\\"\" . $datetime->format(\"D M j\") . \"\\\"\\n\";\n?>")).toMatchSnapshot();
  });
});
