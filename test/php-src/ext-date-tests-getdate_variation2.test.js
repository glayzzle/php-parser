// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/getdate_variation2.phpt
  it("Test getdate() function : usage variation - Passing octal timestamp values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getdate() : usage variation ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n    //octal values\n    'octal 05' => 05,\n    'octal 010' => 010,\n    'octal -010' => -010,\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( getdate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
