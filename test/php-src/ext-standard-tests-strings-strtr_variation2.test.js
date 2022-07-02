// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation2.phpt
  it("Test strtr() function : usage variations - string containing special chars for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Testing strtr() function by passing the\n *   string containing various special characters for 'str' argument and\n *   corresponding translation pair of chars for 'from', 'to' & 'replace_pairs' arguments\n*/\necho \"*** Testing strtr() : string containing special chars for 'str' arg ***\\n\";\n/* definitions of required input variables */\n$count = 1;\n$heredoc_str = <<<EOD\n%\n#$*&\ntext & @()\nEOD;\n//array of string inputs for $str\n$str_arr = array(\n  //double quoted strings\n  \"%\",\n  \"#$*\",\n  \"text & @()\",\n  //single quoted strings\n  '%',\n  '#$*',\n  'text & @()',\n  //heredoc string\n  $heredoc_str\n);\n$from = \"%#$*&@()\";\n$to = \"specials\";\n$replace_pairs = array(\"$\" => \"%\", \"%\" => \"$\", \"#*&@()\" => \"()@&*#\");\n/* loop through to test strtr() with each element of $str_arr */\nfor($index = 0; $index < count($str_arr); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  $str = $str_arr[$index];  //getting the array element in 'str' variable\n  //strtr() call in three args syntax form\n  var_dump( strtr($str, $from, $to) );\n  //strtr() call in two args syntax form\n  var_dump( strtr($str, $replace_pairs) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
