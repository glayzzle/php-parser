// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_variation5.phpt
  it("Test array_walk_recursive() function : usage variations - 'input' argument containing reference variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_walk_recursive() with an array having reference variables\n*/\necho \"*** Testing array_walk_recursive() : array with references ***\\n\";\n$value1 = 10;\n$value2 = -20;\n$value3 = &$value1;\n$value4 = 50;\n// 'input' array containing references to above variables\n$input = array(&$value1, array(&$value2, -35), array(&$value3, 0), array(&$value4));\nfunction callback($value, $key)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($key);  // key\n   var_dump($value); // value\n   echo \"\\n\"; // new line to separate the output between each element\n}\nvar_dump( array_walk_recursive($input, \"callback\"));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
