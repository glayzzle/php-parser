// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/localtime_variation4.phpt
  it("Test localtime() function : usage variation - Passing octal values to timestamp.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing localtime() : usage variation ***\\n\";\ndate_default_timezone_set(\"UTC\");\n// Initialise function arguments not being substituted (if any)\n$is_associative = true;\n//array of values to iterate over\n$inputs = array(\n      'Octal 0' => 00,\n      'Octal 10' => 012,\n      'Octal -10' => -012\n);\nforeach($inputs as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( localtime($value) );\n      var_dump( localtime($value, $is_associative) );\n}\n?>")).toMatchSnapshot();
  });
});
