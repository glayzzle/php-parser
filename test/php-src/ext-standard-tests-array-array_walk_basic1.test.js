// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_basic1.phpt
  it("Test array_walk() function : basic functionality - regular array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_walk() : basic functionality ***\\n\";\n// regular array\n$fruits = array(\"lemon\", \"orange\", \"banana\", \"apple\");\nfunction test_print($item, $key)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($item); // value\n   var_dump($key);  // key\n   echo \"\\n\"; // new line to separate the output between each element\n}\nfunction with_userdata($item, $key, $user_data)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($item); // value\n   var_dump($key);  // key\n   var_dump($user_data); // user supplied data\n   echo \"\\n\"; // new line to separate the output between each element\n}\necho \"-- Using array_walk() with default parameters to show array contents --\\n\";\nvar_dump( array_walk($fruits, 'test_print'));\necho \"-- Using array_walk() with all parameters --\\n\";\nvar_dump( array_walk($fruits, 'with_userdata', \"Added\"));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
