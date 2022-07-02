// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation12.phpt
  it("Test chunk_split() function : usage variations - different heredoc strings for 'ending' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different heredoc strings as 'ending' argument to chunk_split()\n* 'chunklen' argument is set to 10\n*/\necho \"*** Testing chunk_split() : different heredoc strings for 'ending' argument ***\\n\";\n// Initializing required variables\n$chunklen = 10;\n$str = \"This is str to check with heredoc ending.This\\tcontains,\\nspeci@! ch@r$ __with wrong \\k escape char 222.\";\n// Null heredoc string\n$heredoc_null = <<<EOT1\nEOT1;\n// heredoc string with single character\n$heredoc_char = <<<EOT2\na\nEOT2;\n// simple heredoc string\n$heredoc_str = <<<EOT3\nThis is simple heredoc string\nEOT3;\n// heredoc with special characters\n$heredoc_spchar = <<<EOT4\nThis checks with $, %, &, chars\nEOT4;\n// blank heredoc string\n$heredoc_blank = <<<EOT5\nEOT5;\n// heredoc with different white space characters\n$heredoc_escchar = <<<EOT6\nThis checks\\t and \\nwhite space chars\nEOT6;\n// heredoc with multiline\n$heredoc_multiline= <<<EOT7\nThis is to check chunk_split\nfunction with multiline\nheredoc\nEOT7;\n// heredoc with quotes and slashes\n$heredoc_quote_slash = <<<EOT8\n\"To check \" in heredoc\".I'm sure it'll \\work!\nEOT8;\n// different heredoc strings for 'ending'\n$heredoc_arr = array(\n  $heredoc_null,\n  $heredoc_blank,\n  $heredoc_char,\n  $heredoc_str,\n  $heredoc_multiline,\n  $heredoc_spchar,\n  $heredoc_escchar,\n  $heredoc_quote_slash\n);\n// loop through each element of the heredoc_arr for str\n$count = 0;\nforeach($heredoc_arr as $value) {\n  echo \"-- Iteration \".($count+1). \" --\\n\";\n  var_dump( chunk_split( $str, $chunklen, $value) );\n  $count++;\n};\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
