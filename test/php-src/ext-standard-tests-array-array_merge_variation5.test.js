// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation5.phpt
  it("Test array_merge() function : usage variations - numeric keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass array_merge() arrays with only numeric keys to test behaviour.\n * $arr2 contains a duplicate element to $arr1.\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n//numeric keys\n$arr1 = array('zero', 'one', 'two', 'three');\n$arr2 = array(1 => 'one', 20 => 'twenty', 30 => 'thirty');\nvar_dump(array_merge($arr1, $arr2));\nvar_dump(array_merge($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
