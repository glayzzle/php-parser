// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation7.phpt
  it("Test array_slice() function : usage variations - different data types as keys in an array", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different data types as keys in an array to array_slice()\n * to test how $preserve_keys treats them\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n// Initialise function arguments not being substituted\n$offset = 0;\n$length = 10; // to ensure all elements are displayed\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n// arrays of different data types to be passed as $input\n$inputs = array(\n       // int data\n/*1*/  'int' => array(\n       0 => 'zero',\n       1 => 'one',\n       12345 => 'positive',\n       -2345 => 'negative',\n       ),\n       // null data\n/*4*/ 'null uppercase' => array(\n       NULL => 'null 1',\n       ),\n/*5*/  'null lowercase' => array(\n       null => 'null 2',\n       ),\n       // boolean data\n/*6*/ 'bool lowercase' => array(\n       true => 'lowert',\n       false => 'lowerf',\n       ),\n/*7*/  'bool uppercase' => array(\n       TRUE => 'uppert',\n       FALSE => 'upperf',\n       ),\n       // empty data\n/*8*/ 'empty double quotes' => array(\n       \"\" => 'emptyd',\n       ),\n/*9*/  'empty single quotes' => array(\n       '' => 'emptys',\n       ),\n       // string data\n/*10*/ 'string' => array(\n       \"stringd\" => 'stringd',\n       'strings' => 'strings',\n       $heredoc => 'stringh',\n       ),\n       // undefined data\n/*11*/ 'undefined' => array(\n       @$undefined_var => 'undefined',\n       ),\n       // unset data\n/*12*/ 'unset' => array(\n       @$unset_var => 'unset',\n       ),\n);\n// loop through each element of $inputs to check the behavior of array_slice()\n$iterator = 1;\nforeach($inputs as $type => $input) {\n  echo \"\\n-- Iteration $iterator : key type is $type --\\n\";\n  echo \"\\$preserve_keys = TRUE\\n\";\n  var_dump( array_slice($input, $offset, $length, true) );\n  echo \"\\$preserve_keys = FALSE\\n\";\n  var_dump( array_slice($input, $offset, $length, false) );\n  $iterator++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
