// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_variation9.phpt
  it("Test strncmp() function: usage variations - different inputs(heredoc strings)", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() function with different strings for 'str1', 'str2' and considering case sensitive */\necho \"*** Test strncmp() function: with different input strings ***\\n\";\n/* heredoc string */\n$str1 = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\n/* identifier name contains underscore */\n$str2 = <<<identifier_str2\nExample of heredoc\nstring, whose identifier\nhaving underscore(\"_\")\n& numeric value.\nidentifier_str2;\n/* identifier name starts with underscore */\n$str3 = <<<_identifier_str3\nHello, World\nhello, world\n_identifier_str3;\n/* string containing control characters */\n$str4 = <<<identifier_str4\nHello, World\\n\nHello\\0World\nidentifier_str4;\n$strings = array(\n  $str1,\n  $str2,\n  $str3,\n  $str4\n);\n/* loop through to compare each string with the other string */\n$count = 1;\nfor($index1 = 0; $index1 < count($strings); $index1++) {\n  var_dump( strncmp( $strings[$index1], $strings[$index1], strlen($strings[$index1]) ) );\n  $count ++;\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
