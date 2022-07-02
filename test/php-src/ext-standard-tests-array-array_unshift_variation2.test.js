// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unshift_variation2.phpt
  it("Test array_unshift() function : usage variations - all possible values for 'var' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_unshift() by giving all the possible values for $var argument\n*/\necho \"*** Testing array_unshift() : all possible values for \\$var argument ***\\n\";\n// array to be passed to $array argument\n$array = array('f' => \"first\", \"s\" => 'second', 1, 2.222);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"Class A object\";\n  }\n}\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n// get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// different types of values to be passed to $var argument\n$vars = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // array data\n/*10*/ array(),\n       array(0),\n       array(1),\n       array(1, 2),\n       array('color' => 'red', 'item' => 'pen'),\n       // null data\n/*15*/ NULL,\n       null,\n       // boolean data\n/*17*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*21*/ \"\",\n       '',\n       // string data\n/*23*/ \"string\",\n       'string',\n       $heredoc,\n       // object data\n/*26*/ new classA(),\n       // undefined data\n       @$undefined_var,\n       // unset data\n       @$unset_var,\n       // resource variable\n/*29*/ $fp\n);\n// loop through each element of $vars to check the functionality of array_unshift()\n$iterator = 1;\nforeach($vars as $var) {\n  echo \"-- Iteration $iterator --\\n\";\n  $temp_array = $array;\n  /* with default argument */\n  // returns element count in the resulting array after arguments are pushed to\n  // beginning of the given array\n  var_dump( array_unshift($temp_array, $var) );\n  // dump the resulting array\n  var_dump($temp_array);\n  /* with optional arguments */\n  // returns element count in the resulting array after arguments are pushed to\n  // beginning of the given array\n  $temp_array = $array;\n  var_dump( array_unshift($temp_array, $var, \"hello\", 'world') );\n  // dump the resulting array\n  var_dump($temp_array);\n  $iterator++;\n}\n// close the file resource used\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
