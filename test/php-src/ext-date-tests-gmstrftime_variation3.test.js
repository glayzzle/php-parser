// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_variation3.phpt
  it("Test gmstrftime() function : usage variation - Passing week related format strings to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Abbreviated weekday name' => \"%a\",\n      'Full weekday name' => \"%A\",\n      'Week number of the year' => \"%U\",\n      'Week number of the year in decimal number' => \"%W\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmstrftime($value) );\n      var_dump( gmstrftime($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
