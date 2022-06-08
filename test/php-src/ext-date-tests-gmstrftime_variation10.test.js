// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_variation10.phpt
  it("Test gmstrftime() function : usage variation - Checking week related formats which are supported other than on Windows.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\nsetlocale(LC_ALL, \"en_US\");\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n      'The ISO 8601:1988 week number' => \"%V\",\n      'Weekday as decimal' => \"%u\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmstrftime($value) );\n      var_dump( gmstrftime($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
