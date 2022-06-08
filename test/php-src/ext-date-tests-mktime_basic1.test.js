// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/mktime_basic1.phpt
  it("Test mktime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing DateTime::modify() : basic functionality ***\\n\";\n$hour = 10;\n$minute = 30;\n$sec = 45;\n$month = 7;\n$day = 2;\n$year = 1963;\nvar_dump( mktime($hour) );\nvar_dump( mktime($hour, $minute) );\nvar_dump( mktime($hour, $minute, $sec) );\nvar_dump( mktime($hour, $minute, $sec, $month) );\nvar_dump( mktime($hour, $minute, $sec, $month, $day) );\nvar_dump( mktime($hour, $minute, $sec, $month, $day, $year) );\n?>")).toMatchSnapshot();
  });
});
