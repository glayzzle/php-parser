// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/reset_variation3.phpt
  it("Test reset() function : usage variations - Referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Reference two arrays to each other then call reset() to test position of\n * internal pointer in both arrays\n */\necho \"*** Testing reset() : usage variations ***\\n\";\n$array1 = array ('zero', 'one', 'two');\necho \"\\n-- Initial position of internal pointer --\\n\";\nvar_dump(current($array1));\n// Test that when two variables are referenced to one another\n// the internal pointer is the same for both\n$array2 = &$array1;\nnext($array1);\necho \"\\n-- Position after calling next() --\\n\";\necho \"\\$array1: \";\nvar_dump(current($array1));\necho \"\\$array2: \";\nvar_dump(current($array2));\necho \"\\n-- Position after calling reset() --\\n\";\nvar_dump(reset($array1));\necho \"\\$array1: \";\nvar_dump(current($array1));\necho \"\\$array2: \";\nvar_dump(current($array2));\n?>")).toMatchSnapshot();
  });
});
