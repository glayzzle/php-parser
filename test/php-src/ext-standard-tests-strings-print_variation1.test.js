// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/print_variation1.phpt
  it("Test print() function : usage variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing print() function: with unexpected inputs for 'arg' argument ***\\n\";\n//get an unset variable\n$unset_var = 'string_val';\nunset($unset_var);\n//defining a class\nclass sample  {\n  public function __toString() {\n    return \"sample object\";\n  }\n}\n//getting the resource\n$file_handle = fopen(__FILE__, \"r\");\n// array with different values for $input\n$inputs =  array (\n          // integer values\n/*1*/\t  0,\n          1,\n          -2,\n          2147483647,\n          -2147483648,\n          // float values\n/*6*/\t  10.5,\n          -20.5,\n          10.1234567e10,\n          // array values\n/*9*/\t  array(),\n          array(0),\n          array(1, 2),\n          // boolean values\n/*12*/\t  true,\n          false,\n          TRUE,\n          FALSE,\n          // null values\n/*16*/\t  NULL,\n          null,\n          // objects\n/*18*/\t  new sample(),\n          // resource\n/*19*/\t  $file_handle,\n          // undefined variable\n/*20*/\t  @$undefined_var,\n          // unset variable\n/*21*/\t  @$unset_var\n);\n// loop through with each element of the $inputs array to test print() function\n$count = 1;\nforeach($inputs as $input) {\n  echo \"-- Iteration $count --\\n\";\n  $res = print($input);\n  echo \"\\n\";\n  var_dump($res);\n  $count ++;\n}\nfclose($file_handle);  //closing the file handle\n?>")).toMatchSnapshot();
  });
});
