// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/getdate_variation3.phpt
  it("Test getdate() function : usage variation - Passing hexadcimal timestamp values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getdate() : usage variation ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n    //octal values\n    'hexadcimal 0x5' => 0x5,\n    'hexadcimal 0xCAFE' => 0xCAFE,\n    'octal -0xCAFE' => -0xCAFE,\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( getdate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
