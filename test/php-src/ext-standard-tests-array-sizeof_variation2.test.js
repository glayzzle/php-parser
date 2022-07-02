// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sizeof_variation2.phpt
  it("Test sizeof() function : usage variations - different array values for 'var' argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sizeof() : usage variations ***\\n\";\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\necho \"--- Testing sizeof() with different array values for 'var' argument ---\\n\";\n// array containing different types of array values for 'var' argument\n$values = array (\n  /* 1  */  array($fp, \"resource\" => $fp),\n            array(1, array(3, 4, array(6, array(8)))),\n            array(\"a\" => 1, 'b' => 2, array( \"c\" =>3, array( \"d\" => 5))),\n            array(),\n  /* 5  */  array(1, 2, 3, 4),\n            array(\"Saffron\", \"White\", \"Green\"),\n            array('saffron', 'white', 'green'),\n            array(1 => \"Hi\", 2 => \"Hello\" ),\n            array(\"color\" => \"red\", \"item\" => \"pen\"),\n  /* 10 */  array('color' => 'red', 'item' => 'pen'),\n            array(TRUE => \"red\", FALSE => \"pen\" ),\n            array(false => 'red', true => 'pen' ),\n            array('color' => \"red\", \"item\" => 'pen', 1 => \"Hi\", \"\" => \"Hello\" ),\n  /* 14 */  array($fp, \"resource1\" => $fp, 'resource2' => $fp, array( $fp, 'type' => $fp) )\n);\n// loop through each element of the values array for 'var' argument\n// check the working of sizeof()\n$counter = 1;\nfor($i = 0; $i < count($values); $i++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $var = $values[$i];\n  echo \"Default Mode: \";\n  var_dump( sizeof($var) );\n  echo \"\\n\";\n  echo \"COUNT_NORMAL Mode: \";\n  var_dump( sizeof($var, COUNT_NORMAL) );\n  echo \"\\n\";\n  echo \"COUNT_RECURSIVE Mode: \";\n  var_dump( sizeof($var, COUNT_RECURSIVE) );\n  echo \"\\n\";\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
