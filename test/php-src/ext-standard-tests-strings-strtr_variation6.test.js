// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation6.phpt
  it("Test strtr() function : usage variations - unexpected inputs for 'from' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strtr() function: with unexpected inputs for 'from'\n *  and expected type for 'str' & 'to' arguments\n*/\necho \"*** Testing strtr() function: with unexpected inputs for 'from' ***\\n\";\n//defining a class\nclass sample  {\n  public function __toString() {\n    return \"sample object\";\n  }\n}\n//getting the resource\n$file_handle = fopen(__FILE__, \"r\");\n//defining 'str' argument\n$str = \"012atm\";\n// array of values for 'from'\n$from_arr =  array (\n          // integer values\n/*1*/\t  0,\n          1,\n          -2,\n          // float values\n/*4*/\t  10.5,\n          -20.5,\n          10.1234567e10,\n          // array values\n/*7*/\t  array(),\n          array(0),\n          array(1, 2),\n          // boolean values\n/*10*/\t  true,\n          false,\n          TRUE,\n          FALSE,\n          // null values\n/*14*/\t  NULL,\n          null,\n          // objects\n/*16*/\t  new sample(),\n          // resource\n/*17*/\t  $file_handle,\n);\n//defining 'to' argument\n$to = \"atm012\";\n// loop through with each element of the $from array to test strtr() function\n$count = 1;\nfor($index = 0; $index < count($from_arr); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  $from = $from_arr[$index];\n  try {\n    var_dump(strtr($str, $from, $to));\n  } catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n  }\n  $count++;\n}\nfclose($file_handle);  //closing the file handle\n?>")).toMatchSnapshot();
  });
});
