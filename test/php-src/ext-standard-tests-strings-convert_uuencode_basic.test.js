// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/convert_uuencode_basic.phpt
  it("Test convert_uuencode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing convert_uuencode() : basic functionality ***\\n\";\n// array with different values for $string\n$strings =  array (\n  //double quoted strings\n  \"123\",\n  \"abc\",\n  \"1a2b3c\",\n  \"Here is a simple string to test convert_uuencode/decode\",\n  \"\\t This String contains \\t\\t some control characters\\r\\n\",\n  \"\\x90\\x91\\x00\\x93\\x94\\x90\\x91\\x95\\x96\\x97\\x98\\x99\\x9a\\x9b\\x9c\\x9d\\x9e\\x9f\",\n   //single quoted strings\n  '123',\n  'abc',\n  '1a2b3c',\n  '\\t This String contains \\t\\t some control characters\\r\\n',\n);\n// loop through with each element of the $strings array to test convert_uuencode() function\n$count = 1;\nforeach($strings as $string) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( convert_uuencode($string) );\n  $count ++;\n}\n?>")).toMatchSnapshot();
  });
});
