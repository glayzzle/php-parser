// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_variation5.phpt
  it("Test strftime() function : usage variation - Passing date related format strings to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\nsetlocale(LC_ALL, \"en_US\");\ndate_default_timezone_set(\"Asia/Calcutta\");\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Year as decimal number without a century' => \"%y\",\n      'Year as decimal number including the century' => \"%Y\",\n      'Time zone offset' => \"%Z\",\n      'Time zone offset' => \"%z\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( strftime($value) );\n      var_dump( strftime($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
