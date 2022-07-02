// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/end_variation3.phpt
  it("Test end() function : usage variations - Referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how the internal pointer is affected when two variables are referenced to each other\n */\necho \"*** Testing end() : usage variations ***\\n\";\n$array1 = array ('zero', 'one', 'two');\necho \"\\n-- Initial position of internal pointer --\\n\";\nvar_dump(current($array1));\nend($array1);\n// Test that when two variables are referenced to one another\n// the internal pointer is the same for both\n$array2 = &$array1;\necho \"\\n-- Position after calling end() --\\n\";\necho \"\\$array1: \";\nvar_dump(current($array1));\necho \"\\$array2: \";\nvar_dump(current($array2));\n?>")).toMatchSnapshot();
  });
});
