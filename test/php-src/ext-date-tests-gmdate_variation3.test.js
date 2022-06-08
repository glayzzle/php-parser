// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation3.phpt
  it("Test gmdate() function : usage variation - Passing numeric representation of day formats.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n     'Day with leading zeros' => 'd',\n     'Day without leading zeros' => 'j',\n     'ISO representation' => 'N',\n     'Numeric representation of day' => 'w',\n     'Day of the year' => 'z'\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmdate($value) );\n      var_dump( gmdate($value, $timestamp) );\n};\n?>")).toMatchSnapshot();
  });
});
