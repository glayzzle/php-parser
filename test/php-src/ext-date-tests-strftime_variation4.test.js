// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_variation4.phpt
  it("Test strftime() function : usage variation - Passing month related format strings to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : usage variation ***\\n\";\ndate_default_timezone_set(\"Asia/Calcutta\");\n// Initialise function arguments not being substituted (if any)\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Abbreviated month name' => \"%b\",\n      'Full month name' => \"%B\",\n      'Month as decimal' => \"%m\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( strftime($value) );\n      var_dump( strftime($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
