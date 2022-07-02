// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_variation_001.phpt
  it("Test array_keys() function (variation - 1)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing array_keys() on various arrays ***\";\n$arrays = array(\n  array(),\n  array(0),\n  array( array() ),\n  array(\"Hello\" => \"World\"),\n  array(\"\" => \"\"),\n  array(1,2,3, \"d\" => array(4,6, \"d\")),\n  array(\"a\" => 1, \"b\" => 2, \"c\" =>3, \"d\" => array()),\n  array(0 => 0, 1 => 1, 2 => 2, 3 => 3),\n  array(0 =>3.000, 1 =>2, 1 =>3, \"a\"=>3, 3=>5, \"5\"=>3.000),\n  array(TRUE => TRUE, FALSE => FALSE, NULL => NULL, \"\\x000\", \"\\000\"),\n  array(\"a\" => \"abcd\", \"a\" => \"\", \"ab\" => -6, \"cd\" => -0.5 ),\n  array(0 => array(), 1=> array(0), 2 => array(1), \"\"=> array(),\"\"=>\"\" )\n);\n$i = 0;\n/* loop through to test array_keys() with different arrays */\nforeach ($arrays as $array) {\n  echo \"\\n-- Iteration $i --\\n\";\n  var_dump(array_keys($array));\n  $i++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
