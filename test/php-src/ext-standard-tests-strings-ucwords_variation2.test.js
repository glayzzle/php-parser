// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ucwords_variation2.phpt
  it("Test ucwords() function : usage variations - heredoc strings", function () {
    expect(parser.parseCode("<?php\n/*\n * test ucwords() with different string prepared using heredoc\n*/\necho \"*** Testing ucwords() : usage variations ***\\n\";\n// Null here doc string\n$null_string = <<<EOT\nEOT;\n// Heredoc string with blank line\n$blank_line = <<<EOT\nEOT;\n// here doc with multiline string\n$multiline_string = <<<EOT\ntesting ucword() with\nmultiline string using\nheredoc\nEOT;\n// here doc with different whitespaces\n$diff_whitespaces = <<<EOT\ntesting\\rucword(str)\\twith\nmultiline   string\\t\\tusing\nheredoc\\nstring.with\\vdifferent\\fwhite\\vspaces\nEOT;\n// here doc with numeric values\n$numeric_string = <<<EOT\n12sting 123string 4567\nstring\\t123string\\r12 test\\n5test\nEOT;\n// heredoc with quote chars & slash\n$quote_char_string = <<<EOT\nit's bright,but i cann't see it.\n\"things in double quote\"\n'things in single quote'\nthis\\line is /with\\slashs\nEOT;\n$heredoc_strings = array(\n  $null_string,\n  $blank_line,\n  $multiline_string,\n  $diff_whitespaces,\n  $numeric_string,\n  $quote_char_string\n);\n// loop through $heredoc_strings element and check the working on ucwords()\n$count = 1;\nfor($index =0; $index < count($heredoc_strings); $index ++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( ucwords($heredoc_strings[$index]) );\n  $count ++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
