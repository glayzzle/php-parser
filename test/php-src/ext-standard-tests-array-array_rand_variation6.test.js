// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_rand_variation6.phpt
  it("Test array_rand() function : usage variation - with heredoc string as key in the 'input' array", function () {
    expect(parser.parseCode("<?php\n/*\n* Test behaviour of array_rand() when keys of the 'input' array is heredoc string\n*/\necho \"*** Testing array_rand() : with keys of input array as heredoc strings ***\\n\";\n// defining different heredoc strings\n$empty_heredoc = <<<EOT\nEOT;\n$heredoc_with_newline = <<<EOT\n\\n\nEOT;\n$heredoc_with_characters = <<<EOT\nfirst line of heredoc string\nsecond line of heredoc string\nthird line of heredocstring\nEOT;\n$heredoc_with_newline_and_tabs = <<<EOT\nhello\\tworld\\nhello\\nworld\\n\nEOT;\n$heredoc_with_alphanumerics = <<<EOT\nhello123world456\n1234hello\\t1234\nEOT;\n$heredoc_with_embedded_nulls = <<<EOT\nhello\\0world\\0hello\n\\0hello\\0\nEOT;\n$input = array(\n  $empty_heredoc => \"heredoc1\",\n  $heredoc_with_newline => \"heredoc2\",\n  $heredoc_with_characters => \"heredoc3\",\n  $heredoc_with_newline_and_tabs => \"heredoc3\",\n  $heredoc_with_alphanumerics => \"heredoc4\",\n  $heredoc_with_embedded_nulls => \"heredoc5\"\n);\n// Test array_rand() function with different valid 'req_num' values\necho \"\\n-- with default parameters --\\n\";\nvar_dump( array_rand($input) );\necho \"\\n-- with num_req = 1 --\\n\";\nvar_dump( array_rand($input, 1) );\necho \"\\n-- with num_req = 3 --\\n\";\nvar_dump( array_rand($input, 3) );\necho \"\\n-- with num_req = 6 --\\n\";\nvar_dump( array_rand($input, 6) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
