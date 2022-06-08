// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unique_variation5.phpt
  it("Test array_unique() function : usage variations - array with duplicate keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_unique() by passing\n * array having duplicate keys as values.\n*/\necho \"*** Testing array_unique() : array with duplicate keys for \\$input argument ***\\n\";\n// initialize the array having duplicate keys\n$input = array( 1 => \"one\", 2 => \"two\", 2 => \"2\", 3 => \"three\", 1 => \"1\", \"1\", \"2\");\nvar_dump( array_unique($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
