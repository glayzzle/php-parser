// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/idate_variation4.phpt
  it("Test idate() function : usage variation - Passing supported Date format characters to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing idate() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n      'Day of the month' => 'd',\n      'Leap Year' =>'L',\n      'Month number' => 'm',\n      'Days in the month' => 't',\n      'Day of the week' => 'w',\n      'ISO-8601 week number' => 'W',\n      'Year (1 or 2 digits)' => 'y',\n      'Year 4 digits' => 'Y',\n      'Day of the year' => 'z',\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( idate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
