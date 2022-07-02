// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation5.phpt
  it("Test strrchr() function : usage variations - heredoc string containing escape sequences for 'haystack'", function () {
    expect(parser.parseCode("<?php\n/* Prototype  : string strrchr(string $haystack, string $needle);\n * Description: Finds the last occurrence of a character in a string.\n * Source code: ext/standard/string.c\n*/\n/* Test strrchr() function by passing heredoc string containing\n *  escape sequences for haystack and with various needles\n*/\necho \"*** Testing strrchr() function: with heredoc strings ***\\n\";\n$escape_char_str = <<<EOD\n\\tes\\t st\\r\\rch\\r using\n\\escape \\\\seque\\nce\nEOD;\n$needles = array(\n  \"\\t\",\n  '\\n',\n  \"\\r\",\n  \"\\\\\",\n  $escape_char_str //needle as haystack\n);\n//loop through to test strrchr() with each needle\nforeach($needles as $needle) {\n  var_dump( strrchr($escape_char_str, $needle) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
