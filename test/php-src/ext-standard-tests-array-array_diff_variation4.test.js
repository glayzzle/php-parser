// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation4.phpt
  it("Test array_diff() function : usage variations  - array with different data types as values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff() compares indexed arrays containing different\n * data types as values in place of $arr2\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$array = array(1, 2);\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n//get heredoc\n$heredoc = <<<END\nThis is a heredoc\nEND;\n//array of values to iterate over\n$values = array(\n/*1*/\"empty array\" => array(),\n/*2*/\n\"int\" => array(\n      // int data\n      0,\n      1,\n      12345,\n      -2345),\n/*3*/\n\"float\" => array(\n      // float data\n       10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5),\n/*4*/\n\"null\" => array(\n      // null data\n      NULL,\n      null),\n/*5*/\n\"boolean\" => array(\n      // boolean data\n      true,\n      false,\n      TRUE,\n      FALSE),\n/*6*/\n\"empty\" => array(\n      // empty data\n      \"\",\n      ''),\n/*7*/\n\"string\" => array(\n      // string data\n      \"string\",\n      'string',\n      $heredoc),\n/*8*/\n\"binary\" => array(\n       // binary data\n       b\"binary\",\n       (binary)\"binary\"),\n/*9*/\n\"undefined\" => array(\n      // undefined data\n      @$undefined_var),\n/*10*/\n\"unset\" => array(\n      // unset data\n      @$unset_var)\n);\n// loop through each element of the array for $arr2\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n Iteration: $iterator \\n\";\n      var_dump( array_diff($array, $value) );\n      $iterator++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
