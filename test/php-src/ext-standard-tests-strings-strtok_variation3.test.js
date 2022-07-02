// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_variation3.phpt
  it("Test strtok() function : usage variations - with heredoc strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : with heredoc strings\n*/\necho \"*** Testing strtok() : with heredoc strings ***\\n\";\n// defining different heredoc strings\n$empty_heredoc = <<<EOT\nEOT;\n$heredoc_with_newline = <<<EOT\n\\n\nEOT;\n$heredoc_with_characters = <<<EOT\nfirst line of heredoc string\nsecond line of heredoc string\nthird line of heredocstring\nEOT;\n$heredoc_with_newline_and_tabs = <<<EOT\nhello\\tworld\\nhello\\nworld\\n\nEOT;\n$heredoc_with_alphanumerics = <<<EOT\nhello123world456\n1234hello\\t1234\nEOT;\n$heredoc_with_embedded_nulls = <<<EOT\nhello\\0world\\0hello\n\\0hello\\0\nEOT;\n$heredoc_strings = array(\n                   $empty_heredoc,\n                   $heredoc_with_newline,\n                   $heredoc_with_characters,\n                   $heredoc_with_newline_and_tabs,\n                   $heredoc_with_alphanumerics,\n                   $heredoc_with_embedded_nulls\n                   );\n// loop through each element of the array and check the working of strtok()\n// when supplied with different string values\n$count = 1;\nforeach($heredoc_strings as $string)  {\n  echo \"\\n--- Iteration $count ---\\n\";\n  var_dump( strtok($string, \"5o\\0\\n\\t\") );\n  for($counter = 1; $counter <= 10; $counter++)  {\n    var_dump( strtok(\"5o\\0\\n\\t\") );\n  }\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
