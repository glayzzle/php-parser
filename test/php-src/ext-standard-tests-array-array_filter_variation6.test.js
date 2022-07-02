// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation6.phpt
  it("Test array_filter() function : usage variations - 'input' array containing references", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing 'input' array which contains elements as reference to other data\n*/\necho \"*** Testing array_filter() : usage variations - 'input' containing references ***\\n\";\nfunction callback($input)\n{\n  if($input > 5) {\n    return true;\n  }\n  else {\n    return false;\n  }\n}\n// initializing variables\n$value1 = array(1, 2, 8);\n$value2 = array(5, 6, 4);\n$input = array(&$value1, 10, &$value2, 'value');\n// with 'callback' argument\nvar_dump( array_filter($input, 'callback') );\n// with default 'callback' argument\nvar_dump( array_filter($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
