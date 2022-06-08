// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/getdate_variation4.phpt
  it("Test getdate() function : usage variation - Verifyig by supplying year-wise sample time stamps since Unix epoch time", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getdate() : usage variation ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Asia/Calcutta\");\n//array of values to iterate over\n$inputs = array(\n    //Year wise time stamps\n    '01 Jan 1970' => 0,\n    '01 Jan 1971' => 31536000,\n    '01 Jan 1972' => 63072000,\n    '01 Jan 1973' => 94694400,\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( getdate($value) );\n};\n?>")).toMatchSnapshot();
  });
});
