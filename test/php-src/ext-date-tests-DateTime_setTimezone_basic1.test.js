// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_setTimezone_basic1.phpt
  it("Test DateTime::setTimezone() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTime::setTimezone() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n$datetime = new DateTime(\"2009-01-30 17:57:32\");\necho \"Default timezone: \" . date_timezone_get($datetime)->getName() . \"\\n\";\n$la_time = new DateTimezone(\"America/Los_Angeles\");\n$datetime->setTimezone($la_time);\necho \"New timezone: \" . date_timezone_get($datetime)->getName() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
