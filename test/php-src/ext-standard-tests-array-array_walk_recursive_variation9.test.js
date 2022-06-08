// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_variation9.phpt
  it("Test array_walk_recursive() function : usage variations - different callback functions", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing different types of callback functions to array_walk_recursive()\n *   without parameters\n *   with less and more parameters\n*/\necho \"*** Testing array_walk_recursive() : callback function variation ***\\n\";\n$input = array(array('Apple', 'Banana'), 'Mango', array('Orange'));\necho \"-- callback function with both parameters --\\n\";\nfunction callback_two_parameter($value, $key)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($key);  // key\n   var_dump($value); // value\n   echo \"\\n\"; // new line to separate the output between each element\n}\nvar_dump( array_walk_recursive($input, 'callback_two_parameter'));\necho \"-- callback function with only one parameter --\\n\";\nfunction callback_one_parameter($value)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($value); // value\n   echo \"\\n\"; // new line to separate the output between each element\n}\nvar_dump( array_walk_recursive($input, 'callback_one_parameter'));\necho \"-- callback function without parameters --\\n\";\nfunction callback_no_parameter()\n{\n  echo \"callback3() called\\n\";\n}\nvar_dump( array_walk_recursive($input, 'callback_no_parameter'));\necho \"-- passing one more parameter to function with two parameters --\\n\";\nvar_dump( array_walk_recursive($input, 'callback_two_parameter', 10));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
