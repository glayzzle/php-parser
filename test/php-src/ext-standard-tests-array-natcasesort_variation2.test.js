// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation2.phpt
  it("Test natcasesort() function : usage variations - Pass arrays of different data types", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass arrays of different data types to natcasesort() to test how they are sorted\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"Class A object\";\n  }\n}\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// arrays of different data types to be passed to $array_arg argument\n$inputs = array(\n       // int data\n/*1*/  'int' => array(\n       0,\n       1,\n       12345,\n       -2345,\n       ),\n       // float data\n/*2*/  'float' => array(\n       10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       ),\n       // null data\n/*3*/ 'null' => array(\n       NULL,\n       null,\n       ),\n       // boolean data\n/*4*/ 'bool' => array(\n       true,\n       false,\n       TRUE,\n       FALSE,\n       ),\n       // empty data\n/*5*/ 'empty string' => array(\n       \"\",\n       '',\n       ),\n/*6*/ 'empty array' => array(\n       ),\n       // string data\n/*7*/ 'string' => array(\n       \"string\",\n       'string',\n       $heredoc,\n       ),\n       // object data\n/*8*/ 'object' => array(\n       new classA(),\n       ),\n       // undefined data\n/*9*/ 'undefined' => array(\n       @$undefined_var,\n       ),\n       // unset data\n/*10*/ 'unset' => array(\n       @$unset_var,\n       ),\n       // resource variable\n/*11*/ 'resource' => array(\n       $fp\n       ),\n);\n// loop through each element of $inputs to check the behavior of natcasesort()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump( natcasesort($input) );\n    var_dump($input);\n    $iterator++;\n};\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
