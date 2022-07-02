// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/round_variation1.phpt
  it("Test round() function : usage variations - different data types as $val argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing round() : usage variations ***\\n\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// heredoc string\n$heredoc = <<<EOT\nabc\nxyz\nEOT;\n// get a class\nclass classA\n{\n}\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       2147483647,\n       // float data\n/*6*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // null data\n/*11*/ NULL,\n       null,\n       // boolean data\n/*13*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*17*/ \"\",\n       '',\n       array(),\n       // string data\n/*20*/ \"abcxyz\",\n       'abcxyz',\n       $heredoc,\n       // object data\n/*23*/ new classA(),\n       // undefined data\n/*24*/ @$undefined_var,\n       // unset data\n/*25*/ @$unset_var,\n       // resource variable\n/*26*/ $fp\n);\n// loop through each element of $inputs to check the behaviour of round()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(round($input, 14));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $iterator++;\n};\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
