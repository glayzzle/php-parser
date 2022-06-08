// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellarg_variation1-win32.phpt
  it("Test escapeshellarg() function : usage variations - different data types as $arg arg", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing escapeshellarg() : usage variations ***\\n\";\n// heredoc string\n$heredoc = <<<EOT\nabc\nxyz\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12,\n       -12,\n       2147483647,\n       // float data\n/*6*/  10.5,\n       -10.5,\n       1.234567e2,\n       1.234567E-2,\n       .5,\n       // boolean data\n/*13*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*17*/ \"\",\n       '',\n);\n// loop through each element of $inputs to check the behaviour of escapeshellarg()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(escapeshellarg($input));\n    $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
