// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chr_variation1.phpt
  it("Test chr() function : usage variations - test values for $ascii argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing chr() function: with unexpected inputs for 'ascii' argument ***\\n\";\n//defining a class\nclass sample  {\n  public function __toString() {\n    return \"sample object\";\n  }\n}\n//getting the resource\n$file_handle = fopen(__FILE__, \"r\");\n// array with different values for $input\n$inputs =  array (\n          // integer values\n/*1*/\t  0,\n          1,\n          255,\n          256,\n          // float values\n/*5*/\t  10.5,\n          -20.5,\n          1.1234e6,\n          // boolean values\n/*11*/\t  true,\n          false,\n          TRUE,\n          FALSE,\n);\n// loop through with each element of the $inputs array to test chr() function\n$count = 1;\nforeach($inputs as $input) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( bin2hex(chr($input)) );\n  $count ++;\n}\nfclose($file_handle);  //closing the file handle\n?>")).toMatchSnapshot();
  });
});
