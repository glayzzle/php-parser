// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_alnum_variation1.phpt
  it("Test ctype_alnum() function : usage variations - Different data types as $c arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different data types as $c argument to ctype_alnum() to test behaviour\n */\necho \"*** Testing ctype_alnum() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"xyz\";\n  }\n}\n// heredoc string\n$heredoc = <<<EOT\n123\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// unexpected values to be passed to $c argument\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // null data\n/*10*/ NULL,\n       null,\n       // boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*16*/ \"\",\n       '',\n       array(),\n       // string data\n/*19*/ \"pqr\",\n       'LMN',\n       $heredoc,\n       // object data\n/*22*/ new classA(),\n       // undefined data\n/*23*/ @$undefined_var,\n       // unset data\n/*24*/ @$unset_var,\n       // resource variable\n/*25*/ $fp\n);\n// loop through each element of $inputs to check the behavior of ctype_alnum()\n$iterator = 1;\nforeach($inputs as $input) {\n  echo \"\\n-- Iteration $iterator --\\n\";\n  var_dump( ctype_alnum($input) );\n  $iterator++;\n};\nfclose($fp);\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
