// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unique_basic.phpt
  it("Test array_unique() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_unique() : basic functionality ***\\n\";\n// array with default keys\n$input = array(1, 2, \"1\", '2');\nvar_dump( array_unique($input) );\n// associative array\n$input = array(\"1\" => \"one\", 1 => \"one\", 2 => \"two\", '2' => \"two\");\nvar_dump( array_unique($input) );\n// mixed array\n$input = array(\"1\" => \"one\", \"two\", \"one\", 2 => \"two\", \"three\");\nvar_dump( array_unique($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
