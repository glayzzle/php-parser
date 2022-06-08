// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_timezone_set_basic1.phpt
  it("Test date_timezone_set() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing date_timezone_set() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n$datetime = date_create(\"2009-01-30 17:57:32\");\n$tz = date_timezone_get($datetime);\necho \"Default timezone: \" . timezone_name_get($tz) . \"\\n\";\n$datetime = date_create(\"2009-01-30 22:57:32\");\n$la_time = timezone_open(\"America/Los_Angeles\");\ndate_timezone_set($datetime, $la_time);\n$tz = date_timezone_get($datetime);\necho \"New timezone: \" . timezone_name_get($tz) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
