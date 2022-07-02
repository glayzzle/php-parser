// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation8.phpt
  it("Test strtr() function : usage variations - unexpected inputs for 'replace_pairs' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strtr() function: with unexpected inputs for 'replace_pairs'\n *  and expected type for 'str' arguments\n*/\necho \"*** Testing strtr() function: with unexpected inputs for 'replace_pairs' ***\\n\";\n//defining a class\nclass sample  {\n  public function __toString() {\n    return \"sample object\";\n  }\n}\n//getting the resource\n$file_handle = fopen(__FILE__, \"r\");\n//defining 'str' argument\n$str = \"012atm\";\n// array of inputs for 'replace_pairs' argument\n$replace_pairs_arr =  array (\n  // integer values\n  0,\n  1,\n  -2,\n  // float values\n  10.5,\n  -20.5,\n  10.5e10,\n  // array values\n  array(),\n  array(0),\n  array(1, 2),\n  // boolean values\n  true,\n  false,\n  TRUE,\n  FALSE,\n  // null values\n  NULL,\n  null,\n  // objects\n  new sample(),\n  // resource\n  $file_handle,\n);\n// loop through with each element of the $replace_pairs array to test strtr() function\n$count = 1;\nfor($index = 0; $index < count($replace_pairs_arr); $index++) {\n    echo \"\\n-- Iteration $count --\\n\";\n    $replace_pairs = $replace_pairs_arr[$index];\n    try {\n        var_dump(strtr($str, $replace_pairs));\n    } catch (TypeError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    $count ++;\n}\nfclose($file_handle);  //closing the file handle\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
