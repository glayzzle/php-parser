// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_variation4.phpt
  it("Test gmstrftime() function : usage variation - Passing month related format strings to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      'Abbreviated month name' => \"%b\",\n      'Full month name' => \"%B\",\n      'Month as decimal' => \"%m\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmstrftime($value) );\n      var_dump( gmstrftime($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
