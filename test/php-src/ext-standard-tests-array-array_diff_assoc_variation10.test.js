// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_variation10.phpt
  it("Test array_diff_assoc() function : usage variations - binary safe check", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff_assoc() compares binary data\n */\necho \"*** Testing array_diff_assoc() : usage variations ***\\n\";\n$array1 = array( b\"1\",\n                 b\"hello\",\n                 \"world\",\n                 \"str1\" => \"hello\",\n                 \"str2\" => \"world\");\n$array2 = array( b\"1\" => 'hello',\n                 b\"world\",\n                 \"hello\",\n                 'test');\nvar_dump(array_diff_assoc($array1, $array2));\nvar_dump(array_diff_assoc($array2, $array1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
