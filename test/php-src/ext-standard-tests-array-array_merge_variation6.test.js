// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation6.phpt
  it("Test array_merge() function : usage variations - string keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass array_merge arrays with string keys to test behaviour.\n * $arr2 has a duplicate key to $arr1\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n//string keys\n$arr1 = array('zero' => 'zero', 'one' => 'un', 'two' => 'deux');\n$arr2 = array('zero' => 'zero', 'un' => 'eins', 'deux' => 'zwei');\nvar_dump(array_merge($arr1, $arr2));\nvar_dump(array_merge($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
