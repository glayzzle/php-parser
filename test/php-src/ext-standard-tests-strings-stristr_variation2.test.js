// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stristr_variation2.phpt
  it("Test stristr() function : usage variations - test values for $needle argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stristr() function: with unexpected inputs for 'needle' argument ***\\n\";\n//defining a class\nclass sample  {\n  public function __toString() {\n    return \"sample object\";\n  }\n}\n//getting the resource\n$file_handle = fopen(__FILE__, \"r\");\n// array with different values for $input\n$inputs =  array (\n          // integer values\n/*1*/\t  0,\n          1,\n          -2,\n          -PHP_INT_MAX,\n          // float values\n/*5*/\t  10.5,\n          -20.5,\n          10.1234567e10,\n          // array values\n/*8*/\t  array(),\n          array(0),\n          array(1, 2),\n          // boolean values\n/*11*/\t  true,\n          false,\n          TRUE,\n          FALSE,\n          // objects\n/*17*/\t  new sample(),\n          // resource\n/*18*/\t  $file_handle,\n);\n//defining '$pad_length' argument\n$pad_length = \"20\";\n// loop through with each element of the $inputs array to test stristr() function\n$count = 1;\nforeach($inputs as $input) {\n  echo \"-- Iteration $count --\\n\";\n  try {\n    var_dump( stristr(\"Hello World\", $input) );\n  } catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  $count ++;\n}\nfclose($file_handle);  //closing the file handle\n?>")).toMatchSnapshot();
  });
});
