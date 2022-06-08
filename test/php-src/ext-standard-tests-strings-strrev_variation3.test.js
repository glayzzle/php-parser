// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrev_variation3.phpt
  it("Test strrev() function : usage variations - heredoc strings", function () {
    expect(parser.parseCode("<?php\n/* Testing strrev() function with heredoc strings for 'str' */\necho \"*** Testing strrev() function: with heredoc strings ***\\n\";\n$multi_line_str = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\n$special_chars_str = <<<EOD\nEx'ple of h'doc st'g, contains\n$#%^*&*_(\"_\")!#@@!$#$^^&*(special)\nchars.\nEOD;\n$control_chars_str = <<<EOD\nHello, World\\n\nHello\\0World\nEOD;\n$quote_chars_str = <<<EOD\nit's bright o'side\n\"things in double quote\"\n'things in single quote'\nthis\\line is /with\\slashs\nEOD;\n$blank_line = <<<EOD\nEOD;\n$empty_str = <<<EOD\nEOD;\n$strings = array(\n  $multi_line_str,\n  $special_chars_str,\n  $control_chars_str,\n  $quote_chars_str,\n  $blank_line,\n  $empty_str\n);\n$count = 1;\nfor( $index = 0; $index < count($strings); $index++ ) {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( strrev($strings[$index]) );\n  $count ++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
