// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_variation4.phpt
  it("Test strtr() function : usage variations - empty string & null for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Testing strtr() function by passing the\n *   empty string & null for 'str' argument and\n *   corresponding translation pair of chars for 'from', 'to' & 'replace_pairs' arguments\n*/\necho \"*** Testing strtr() : empty string & null for 'str' arg ***\\n\";\n/* definitions of required input variables */\n$count = 1;\n$heredoc_str = <<<EOD\nEOD;\n//array of string inputs for $str\n$str_arr = array(\n  \"\",\n  '',\n  FALSE,\n  false,\n  $heredoc_str\n);\n$from = \"\";\n$to = \"TEST\";\n$replace_pairs = array(\"\" => \"t\", '' => \"TEST\");\n/* loop through to test strtr() with each element of $str_arr */\nfor($index = 0; $index < count($str_arr); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  $str = $str_arr[$index];  //getting the array element in 'str' variable\n  //strtr() call in three args syntax form\n  var_dump( strtr($str, $from, $to) );\n  //strtr() call in two args syntax form\n  var_dump( strtr($str, $replace_pairs) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
