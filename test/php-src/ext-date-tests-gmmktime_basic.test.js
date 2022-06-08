// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmmktime_basic.phpt
  it("Test gmmktime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmmktime() : basic functionality ***\\n\";\n// Initialise all required variables\n$hour = 8;\n$min = 8;\n$sec = 8;\n$mon = 8;\n$day = 8;\n$year = 2008;\n// Calling gmmktime() with all possible arguments\nvar_dump( gmmktime($hour, $min, $sec, $mon, $day, $year) );\n?>")).toMatchSnapshot();
  });
});
