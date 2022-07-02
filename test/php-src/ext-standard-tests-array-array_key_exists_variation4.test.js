// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_variation4.phpt
  it("Test array_key_exists() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass referenced variables as arguments to array_key_exists() to test behaviour\n */\necho \"*** Testing array_key_exists() : usage variations ***\\n\";\n$array = array('one' => 1, 'two' => 2, 'three' => 3);\necho \"\\n-- \\$search is a reference to \\$array --\\n\";\n$search = &$array;\nvar_dump(array_key_exists('one', $search));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
