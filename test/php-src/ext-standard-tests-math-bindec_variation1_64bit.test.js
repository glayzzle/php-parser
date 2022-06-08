// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bindec_variation1_64bit.phpt
  it("Test bindec() function : usage variations - different data types as $binary_string arg", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing bindec() : usage variations ***\\n\";\n// heredoc string\n$heredoc = <<<EOT\nabc\nxyz\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*16*/ \"\",\n       '',\n       array(),\n       // string data\n/*19*/ \"abcxyz\",\n       'abcxyz',\n       $heredoc,\n       // resource variable\n/*24*/ $fp\n);\n// loop through each element of $inputs to check the behaviour of bindec()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(bindec($input));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $iterator++;\n};\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
