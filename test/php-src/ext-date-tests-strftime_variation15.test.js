// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_variation15.phpt
  it("Test strftime() function : usage variation - Checking time related formats which was not supported on Windows before VC14.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\nsetlocale(LC_ALL, \"C\");\ndate_default_timezone_set(\"Asia/Calcutta\");\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Time in a.m/p.m notation' => \"%r\",\n      'Time in 24 hour notation' => \"%R\",\n      'Current time %H:%M:%S format' => \"%T\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( strftime($value) );\n      var_dump( strftime($value, $timestamp) );\n}\n?>")).toMatchSnapshot();
  });
});
