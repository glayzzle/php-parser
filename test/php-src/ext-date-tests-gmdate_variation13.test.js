// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation13.phpt
  it("Test gmdate() function : usage variation - Passing predefined constants to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n//array of values to iterate over\n$inputs = array(\n      // Predefined Date constants\n      'DATE_ATOM Constant' => DATE_ATOM,\n      'DATE_COOKIE Constant' => DATE_COOKIE,\n      'DATE_RFC822 Constant' => DATE_RFC822,\n      'DATE_RFC850 Constant' => DATE_RFC850,\n      'DATE_RFC1036 Constant' => DATE_RFC1036,\n      'DATE_RFC1123 Constant' => DATE_RFC1123,\n      'DATE_RFC2822 Constant' => DATE_RFC2822,\n      'DATE_RFC3339 Constant' => DATE_RFC3339,\n      'DATE_RSS Constant' => DATE_RSS,\n      'DATE_W3C Constant' => DATE_W3C,\n);\n// loop through each element of the array for format\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( gmdate($value, $timestamp) );\n      var_dump( gmdate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
