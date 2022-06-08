// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unique_variation8.phpt
  it("Test array_unique() function : usage variations - two dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_unique() by passing\n * two dimensional arrays for $input argument.\n*/\necho \"*** Testing array_unique() : two dimensional array for \\$input argument ***\\n\";\n// initialize the 2-d array\n$input = array(\n  array(1, 2, 3, 1),\n  array(\"hello\", \"world\", \"str1\" => \"hello\", \"str2\" => 'world'),\n  array(1 => \"one\", 2 => \"two\", \"one\", 'two'),\n  array(1, 2, 3, 1)\n);\nvar_dump( array_unique($input, SORT_STRING) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
