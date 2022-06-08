// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation7.phpt
  it("Test strrchr() function : usage variations - heredoc string containing blank line for 'haystack'", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function by passing heredoc string containing\n *  blank-line for haystack and with various needles\n*/\necho \"*** Testing strrchr() function: with heredoc strings ***\\n\";\n$blank_line = <<<EOD\nEOD;\n$needles = array(\n  \"\\n\",\n  '\\n',\n  \"\\r\",\n  \"\\r\\n\",\n  \"\\t\",\n  \"\",\n  $blank_line //needle as haystack\n);\n//loop through to test strrchr() with each needle\nforeach($needles as $needle) {\n  var_dump( strrchr($blank_line, $needle) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
