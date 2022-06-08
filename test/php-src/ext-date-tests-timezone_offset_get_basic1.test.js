// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_offset_get_basic1.phpt
  it("Test timezone_offset_get() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing timezone_offset_get() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$tz = timezone_open(\"Europe/London\");\n$date = date_create(\"GMT\");\nvar_dump(timezone_offset_get($tz, $date));\n$tz = timezone_open(\"America/New_York\");\nvar_dump(timezone_offset_get($tz, $date));\n$tz = timezone_open(\"America/Los_Angeles\");\nvar_dump(timezone_offset_get($tz, $date));\n?>")).toMatchSnapshot();
  });
});
