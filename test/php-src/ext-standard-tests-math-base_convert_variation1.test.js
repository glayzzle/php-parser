// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_variation1.phpt
  it("Test base_convert() function : usage variations - different data types as $number argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing base_convert() : usage variations ***\\n\";\n// heredoc string\n$heredoc = <<<EOT\nabc\nxyz\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12,\n       -12,\n       2147483647,\n       // float data\n/*6*/  10.5,\n       -10.5,\n       1.234567e2,\n       1.234567E-2,\n       .5,\n       // boolean data\n/*13*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*17*/ \"\",\n       '',\n       array(),\n       // string data\n/*20*/ \"abcxyz\",\n       'abcxyz',\n       $heredoc,\n       // resource variable\n/*25*/ $fp\n);\n// loop through each element of $inputs to check the behaviour of base_convert()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(base_convert($input, 10, 8));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    $iterator++;\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
