// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_assoc_variation5.phpt
  it("Test array_intersect_assoc() function : usage variations - assoc array with diff keys for 'arr1' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_intersect_assoc() by passing different\n * associative arrays having different possible keys to $arr1 argument.\n * The $arr2 argument passed is a fixed array\n*/\necho \"*** Testing array_intersect_assoc() : assoc array with diff keys to \\$arr1 argument ***\\n\";\n// get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a heredoc string\n$heredoc = <<<EOT\nHello world\nEOT;\n// different variations of associative arrays to be passed to $arr1 argument\n$arrays = array (\n       // empty array\n/*1*/  array(),\n       // arrays with integer keys\n       array(0 => \"0\"),\n       array(1 => \"1\"),\n       array(1 => \"1\", 2 => \"2\", 3 => \"3\", 4 => \"4\"),\n       // arrays with string keys\n/*7*/  array('\\tHello' => 111, 're\\td' => \"color\",\n             '\\v\\fworld' => 2.2, 'pen\\n' => 33),\n       array(\"\\tHello\" => 111, \"re\\td\" => \"color\",\n             \"\\v\\fworld\" => 2.2, \"pen\\n\" => 33),\n       array(\"hello\", $heredoc => \"string\"), // heredoc\n       // array with object, unset variable and resource variable\n/*10*/ array(@$unset_var => \"hello\"),\n       // array with mixed keys\n/*11*/ array('hello' => 1, \"fruit\" => 2.2,\n              133 => \"int\",\n             @$unset_var => \"unset\", $heredoc => \"heredoc\")\n);\n// array to be passed to $arr2 argument\n$arr2 = array(0 => 0, 2 => \"float\", 4 => \"f3\", 33333333 => \"f4\",\n              \"\\tHello\" => 111, 2.2, 'color', \"Hello world\" => \"string\",\n              \"pen\\n\" => 33,  133 => \"int\");\n// loop through each sub-array within $arrays to check the behavior of array_intersect_assoc()\n$iterator = 1;\nforeach($arrays as $arr1) {\n  echo \"-- Iteration $iterator --\\n\";\n  // Calling array_intersect_assoc() with default arguments\n  var_dump( array_intersect_assoc($arr1, $arr2) );\n  // Calling array_intersect_assoc() with more arguments.\n  // additional argument passed is the same as $arr1 argument\n  var_dump( array_intersect_assoc($arr1, $arr2, $arr1) );\n  $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
