// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unique_variation6.phpt
  it("Test array_unique() function : usage variations - array with reference variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_unique() by passing\n * array having reference variables as values.\n*/\necho \"*** Testing array_unique() : array with reference variables for \\$input argument ***\\n\";\n$value1 = 10;\n$value2 = \"hello\";\n$value3 = 0;\n$value4 = &$value2;\n// input array containing elements as reference variables\n$input = array(\n  0 => 0,\n  1 => &$value4,\n  2 => &$value2,\n  3 => \"hello\",\n  4 => &$value3,\n  5 => $value4\n);\nvar_dump( array_unique($input, SORT_STRING) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
