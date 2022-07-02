// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values.phpt
  it("Test array_values() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_values() on basic array ***\\n\";\n$basic_arr = array( 1, 2, 2.0, \"asdasd\", array(1,2,3) );\nvar_dump( array_values($basic_arr) );\necho \"\\n*** Testing array_values() on various arrays ***\";\n$arrays = array (\n  array(),\n  array(0),\n  array(-1),\n  array( array() ),\n  array(\"Hello\"),\n  array(\"\"),\n  array(\"\", array()),\n  array(1,2,3),\n  array(1,2,3, array()),\n  array(1,2,3, array(4,6)),\n  array(\"a\" => 1, \"b\" => 2, \"c\" =>3),\n  array(0 => 0, 1 => 1, 2 => 2),\n  array(TRUE, FALSE, NULL, true, false, null, \"TRUE\", \"FALSE\",\n        \"NULL\", \"\\x000\", \"\\000\"),\n  array(\"Hi\" => 1, \"Hello\" => 2, \"World\" => 3),\n  array(\"a\" => \"abcd\", \"a\" => \"\", \"ab\" => -6, \"cd\" => -0.5 ),\n  array(0 => array(), 1=> array(0), 2 => array(1), \"\"=> array(), \"\"=>\"\" )\n);\n$i = 0;\n/* loop through to test array_values() with different arrays given above */\nforeach ($arrays as $array) {\n  echo \"\\n-- Iteration $i --\\n\";\n  var_dump( array_values($array) );\n  $i++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
