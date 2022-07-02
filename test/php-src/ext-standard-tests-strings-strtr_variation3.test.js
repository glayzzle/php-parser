// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation3.phpt
  it("Test strtr() function : usage variations - string containing escape sequences for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Testing strtr() function by passing the\n *   string containing various escape sequences for 'str' argument and\n *   corresponding translation pair of chars for 'from', 'to' & 'replace_pairs' arguments\n*/\necho \"*** Testing strtr() : string containing escape sequences for 'str' arg ***\\n\";\n/* definitions of required input variables */\n$count = 1;\n$heredoc_str = <<<EOD\n\\tes\\t\\\\stt\\r\n\\\\test\\\\\\strtr\n\\ntest\\r\\nstrtr\n\\$variable\n\\\"quotes\nEOD;\n//array of string inputs for $str\n$str_arr = array(\n  //double quoted strings\n  \"\\tes\\t\\\\stt\\r\",\n  \"\\\\test\\\\\\strtr\",\n  \"\\ntest\\r\\nstrtr\",\n  \"\\$variable\",\n  \"\\\"quotes\",\n  //single quoted strings\n  '\\tes\\t\\\\stt\\r',\n  '\\\\test\\\\\\strtr',\n  '\\ntest\\r\\nstrtr',\n  '\\$variable',\n  '\\\"quotes',\n  //heredoc string\n  $heredoc_str\n);\n$from = \"\\n\\r\\t\\\\\";\n$to = \"TEST\";\n$replace_pairs = array(\"\\n\" => \"t\", \"\\r\\n\" => \"T\", \"\\n\\r\\t\\\\\" => \"TEST\");\n/* loop through to test strtr() with each element of $str_arr */\nfor($index = 0; $index < count($str_arr); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  $str = $str_arr[$index];  //getting the array element in 'str' variable\n  //strtr() call in three args syntax form\n  var_dump( strtr($str, $from, $to) );\n  //strtr() call in two args syntax form\n  var_dump( strtr($str, $replace_pairs) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
