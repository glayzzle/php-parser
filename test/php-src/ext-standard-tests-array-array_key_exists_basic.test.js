// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_basic.phpt
  it("Test array_key_exists() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_key_exists()\n */\necho \"*** Testing array_key_exists() : basic functionality ***\\n\";\n$key1 = 'key';\n$key2 = 'val';\n$search = array('one', 'key' => 'value', 'val');\nvar_dump(array_key_exists($key1, $search));\nvar_dump(array_key_exists($key2, $search));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
