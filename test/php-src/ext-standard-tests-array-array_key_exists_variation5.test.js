// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_variation5.phpt
  it("Test array_key_exists() function : usage variations - multidimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_key_exists() behaves with multi-dimensional arrays\n */\necho \"*** Testing array_key_exists() : usage variations ***\\n\";\n$multi_array = array ('zero' => 'val1',\n                      'one' => 'val2',\n                      'sub1' => array (1, 2, 3));\necho \"\\n-- Attempt to match key in sub-array --\\n\";\n// this key is in the sub-array\nvar_dump(array_key_exists(0, $multi_array));\necho \"\\n-- \\$search arg points to sub-array --\\n\";\nvar_dump(array_key_exists(0, $multi_array['sub1']));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
