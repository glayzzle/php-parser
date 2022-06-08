// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_push_variation3.phpt
  it("Test array_push() function : usage variations - multidimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_push when passed:\n * 1. an array as $var arg\n * 2. as sub-array as $stack arg\n */\necho \"*** Testing array_push() : usage variations ***\\n\";\necho \"\\n-- Pass array as \\$var argument --\\n\";\n$array = array(1, 2, 3);\n$sub_array = array('one', 'two');\nvar_dump(array_push($array, $sub_array));\nvar_dump($array);\necho \"\\n-- Pass sub-array as \\$stack argument --\\n\";\nvar_dump(array_push($array[3], 'a'));\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
