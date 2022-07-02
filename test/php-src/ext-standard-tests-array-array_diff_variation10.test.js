// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation10.phpt
  it("Test array_diff() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour of array_diff() function with binary input\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n$array1 = array( b\"1\",\n                 b\"hello\",\n                 \"world\",\n                 \"str1\" => \"hello\",\n                 \"str2\" => \"world\");\n$array2 = array( b\"1\" => 'hello',\n                 b\"world\",\n                 \"hello\",\n                 'test');\nvar_dump(array_diff($array1, $array2));\nvar_dump(array_diff($array2, $array1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
