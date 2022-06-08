// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unique_variation7.phpt
  it("Test array_unique() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_unique() by passing an array having binary values.\n*/\necho \"*** Testing array_unique() : array with binary data for \\$input argument ***\\n\";\n// array with binary values\n$input = array( b\"1\", b\"hello\", \"world\", \"str1\" => \"hello\", \"str2\" => \"world\");\nvar_dump( array_unique($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
