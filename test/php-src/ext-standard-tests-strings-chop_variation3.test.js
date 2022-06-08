// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chop_variation3.phpt
  it("Test chop() function : usage variations - with heredoc string", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing chop() : with heredoc strings\n*/\necho \"*** Testing chop() : with heredoc strings ***\\n\";\n// defining different heredoc strings\n$empty_heredoc = <<<EOT\nEOT;\n$heredoc_with_newline = <<<EOT\n\\n\nEOT;\n$heredoc_with_characters = <<<EOT\nfirst line of heredoc string\nsecond line of heredoc string\nthird line of heredocstring\nEOT;\n$heredoc_with_newline_and_tabs = <<<EOT\nhello\\tworld\\nhello\\nworld\\n\nEOT;\n$heredoc_with_alphanumerics = <<<EOT\nhello123world456\n1234hello\\t1234\nEOT;\n$heredoc_with_embedded_nulls = <<<EOT\nhello\\0world\\0hello\n\\0hello\\0\nEOT;\n$heredoc_strings = array(\n                   $empty_heredoc,\n                   $heredoc_with_newline,\n                   $heredoc_with_characters,\n           $heredoc_with_newline_and_tabs,\n           $heredoc_with_alphanumerics,\n           $heredoc_with_embedded_nulls\n           );\n$count = 1;\nforeach($heredoc_strings as $string)  {\n  echo \"\\n--- Iteration $count ---\\n\";\n  var_dump( chop($string) );\n  var_dump( chop($string, \"12345o\\0\\n\\t\") );\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
