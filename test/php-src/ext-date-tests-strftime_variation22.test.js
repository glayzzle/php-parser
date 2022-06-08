// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_variation22.phpt
  it("Test strftime() function : usage variation - Checking Preferred date and time representation other than on Windows.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\nsetlocale(LC_ALL, \"POSIX\");\nputenv(\"LC_ALL=POSIX\");\ndate_default_timezone_set(\"Asia/Calcutta\");\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Preferred date and time representation' => \"%c\",\n      'Preferred date representation' => \"%x\",\n      'Preferred time representation' => \"%X\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( strftime($value, $timestamp) );\n}\n?>")).toMatchSnapshot();
  });
});
