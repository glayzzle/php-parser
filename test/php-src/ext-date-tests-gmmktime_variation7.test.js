// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmmktime_variation7.phpt
  it("Test gmmktime() function : usage variation - Checking with few optional arguments.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmmktime() : usage variation ***\\n\";\n// Initialise all required variables\n$hour = 8;\n$min = 8;\n$sec = 8;\n$mon = 8;\n$day = 8;\necho \"\\n-- Testing gmmktime() function with one optional argument --\\n\";\nvar_dump( gmmktime($hour) );\necho \"\\n-- Testing gmmktime() function with two optional argument --\\n\";\nvar_dump( gmmktime($hour, $min) );\necho \"\\n-- Testing gmmktime() function with three optional argument --\\n\";\nvar_dump( gmmktime($hour, $min, $sec) );\necho \"\\n-- Testing gmmktime() function with four optional argument --\\n\";\nvar_dump( gmmktime($hour, $min, $sec, $mon) );\necho \"\\n-- Testing gmmktime() function with five optional argument --\\n\";\nvar_dump( gmmktime($hour, $min, $sec, $mon, $day) );\n?>")).toMatchSnapshot();
  });
});
