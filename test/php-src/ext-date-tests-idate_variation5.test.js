// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/idate_variation5.phpt
  it("Test idate() function : usage variation - Passing supported Time format characters to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing idate() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n      'Internet Time' => 'B',\n      '12 hour format' => 'h',\n      '24 hour format' => 'H',\n      'Minutes' => 'i',\n      'DST Activated' => 'I',\n      'Seconds' => 's',\n      'Seconds since Unix Epoch' => 'U',\n      'Time zone offset' => 'Z'\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( idate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
