// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation9.phpt
  it("Test gmdate() function : usage variation - Passing Time format options to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n$time_formats = array(\n      'Lowercase Ante meridiem and post meridiem' => 'a',\n      'Uppercase Ante meridiem and post meridiem' => 'a',\n      'Swatch Internet time' => 'B',\n      '12-hour format without leading zeros' => 'g',\n      '24-hour format without leading zeros' => 'G',\n      '12-hour format with leading zeros' => 'h',\n      '24-hour format with leading zeros' => 'H',\n      'Minutes with leading zeros' => 'i',\n      'Seconds with leading zeros' => 's',\n      'Milliseconds' => 'u',\n);\nforeach($time_formats as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmdate($value) );\n      var_dump( gmdate($value, $timestamp) );\n}\n?>")).toMatchSnapshot();
  });
});
