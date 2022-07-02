// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_basic.phpt
  it("Test array_filter() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_filter() : basic functionality ***\\n\";\n// Initialise all required variables\n$input = array(1, 2, 3, 0, -1);  // 0 will be considered as FALSE and removed in default callback\nfunction even($input)\n{\n  return ($input % 2 == 0);\n}\n// with all possible arguments\nvar_dump( array_filter($input,\"even\") );\n// with default arguments\nvar_dump( array_filter($input) );\n// same as with default arguments\nvar_dump( array_filter($input, null) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
