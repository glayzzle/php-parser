// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation4.phpt
  it("Test strrchr() function : usage variations - heredoc string containing special chars for 'haystack'", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function by passing heredoc string containing special chars for haystack\n * and with various needles\n*/\necho \"*** Testing strrchr() function: with heredoc strings ***\\n\";\n$special_chars_str = <<<EOD\nExample of heredoc string contains\n$#%^*&*_(\"_\")!#@@!$#$^^&*(special)\nchars.\nEOD;\n$heredoc_needle = <<<EOD\n^^&*(\nEOD;\n$needles = array(\n  \"!@@!\",\n  '_',\n  '(\"_\")',\n  \"$*\",\n  \"(special)\",\n  $heredoc_needle,  //needle as heredoc string\n  $special_chars_str  //needle as haystack\n);\n//loop through to test strrchr() with each needle\nforeach($needles as $needle) {\n  var_dump( strrchr($special_chars_str, $needle) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
