// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmmktime_variation8.phpt
  it("Test gmmktime() function : usage variation - Passing octal and hexadecimal values to arguments.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmmktime() : usage variation ***\\n\";\n// Initialise all required variables\n$hour = 010;\n$min = 010;\n$sec = 010;\n$mon = 010;\n$day = 010;\n$year = 03730;\necho \"\\n-- Testing gmmktime() function with supplying octal values to arguments --\\n\";\nvar_dump( gmmktime($hour, $min, $sec, $mon, $day, $year) );\n// Initialise all required variables\n$hour = 0x8;\n$min = 0x8;\n$sec = 0x8;\n$mon = 0x8;\n$day = 0x8;\n$year = 0x7D8;\necho \"\\n-- Testing gmmktime() function with supplying hexa decimal values to arguments --\\n\";\nvar_dump( gmmktime($hour, $min, $sec, $mon, $day, $year) );\n?>")).toMatchSnapshot();
  });
});
