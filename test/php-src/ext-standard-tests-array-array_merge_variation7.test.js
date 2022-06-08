// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation7.phpt
  it("Test array_merge() function : usage variations - Mixed keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass array_merge() arrays with mixed keys to test how it attaches them to\n * existing arrays\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n//mixed keys\n$arr1 = array('zero', 20 => 'twenty', 'thirty' => 30, true => 'bool');\n$arr2 = array(0, 1, 2, null => 'null', 0 => 'float');\nvar_dump(array_merge($arr1, $arr2));\nvar_dump(array_merge($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
