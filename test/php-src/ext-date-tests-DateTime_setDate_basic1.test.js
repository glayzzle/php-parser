// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_setDate_basic1.phpt
  it("Test DateTime::setDate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing DateTime::setDate() : basic functionality ***\\n\";\n$datetime = new DateTime(\"2009-01-30 19:34:10\");\necho $datetime->format(DATE_RFC2822) . \"\\n\";\n$datetime->setDate(2008, 02, 01);\necho $datetime->format(DATE_RFC2822) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
