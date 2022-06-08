// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation3.phpt
  it("Test strrchr() function : usage variations - multi line heredoc string for 'haystack'", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function by passing multi-line heredoc string for haystack and\n *    with various needles\n*/\necho \"*** Testing strrchr() function: with heredoc strings ***\\n\";\n$multi_line_str = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\n$needles = array(\n  \"ing\",\n  \"\",\n  \" \",\n  $multi_line_str //needle as haystack\n);\n//loop through to test strrchr() with each needle\nforeach($needles as $needle) {\n  var_dump( strrchr($multi_line_str, $needle) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
