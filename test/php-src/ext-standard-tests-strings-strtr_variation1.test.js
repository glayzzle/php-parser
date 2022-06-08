// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation1.phpt
  it("Test strtr() function : usage variations - regular & numeric strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Testing strtr() function by passing the\n *   combination of numeric & regular strings for 'str' argument and\n *   corresponding translation pair of chars for 'from', 'to' & 'replace_pairs' arguments\n*/\necho \"*** Testing strtr() : numeric & regular double quoted strings ***\\n\";\n/* definitions of required input variables */\n$count = 1;\n$heredoc_str = <<<EOD\n123\nabc\n1a2b3c\nEOD;\n//array of string inputs for $str\n$str_arr = array(\n  //double quoted strings\n  \"123\",\n  \"abc\",\n  \"1a2b3c\",\n  //single quoted strings\n  '123',\n  'abc',\n  '1a2b3c',\n  //heredoc string\n  $heredoc_str\n);\n$from = \"123abc\";\n$to = \"abc123\";\n$replace_pairs = array(\"1\" => \"a\", \"a\" => 1, \"2b3c\" => \"b2c3\", \"b2c3\" => \"3c2b\");\n/* loop through to test strtr() with each element of $str_arr */\nfor($index = 0; $index < count($str_arr); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  $str = $str_arr[$index];  //getting the $str_arr element in $str variable\n  //strtr() call in three args syntax form\n  var_dump( strtr($str, $from, $to) );\n  //strtr() call in two args syntax form\n  var_dump( strtr($str, $replace_pairs) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
