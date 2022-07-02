// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_variation5.phpt
  it("Test array_fill() function : usage variations - different types of array values for 'val' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * testing array_fill() by passing different types of array  values for 'val' argument\n */\necho \"*** Testing array_fill() : usage variations ***\\n\";\n// Initialise function arguments not being substituted\n$start_key = 0;\n$num = 2;\n//array of different types of array values for 'val' argument\n$values = array(\n  /* 1  */  array(),\n            array(1 , 2 , 3 , 4),\n            array(1 => \"Hi\" , 2 => \"Hello\"),\n            array(\"Saffron\" , \"White\" , \"Green\"),\n  /* 5  */  array('color' => 'red' , 'item' => 'pen'),\n            array( 'color' => 'red' , 2 => 'green ' ),\n            array(\"colour\" => \"red\" , \"item\" => \"pen\"),\n            array( TRUE => \"red\" , FALSE => \"green\" ),\n            array( true => \"red\" , FALSE => \"green\" ),\n  /* 10 */  array( 1 => \"Hi\" , \"color\" => \"red\" , 'item' => 'pen'),\n            array( NULL => \"Hi\", '1' => \"Hello\" , \"1\" => \"Green\"),\n            array( \"\"=>1, \"color\" => \"green\"),\n  /* 13 */  array('Saffron' , 'White' , 'Green')\n);\n// loop through each element of the values array for 'val' argument\n// check the working of array_fill()\necho \"--- Testing array_fill() with different types of array values for 'val' argument ---\\n\";\n$counter = 1;\nfor($i = 0; $i < count($values); $i++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $val = $values[$i];\n  var_dump( array_fill($start_key , $num , $val) );\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
