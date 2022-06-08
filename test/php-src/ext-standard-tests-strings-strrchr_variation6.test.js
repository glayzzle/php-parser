// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation6.phpt
  it("Test strrchr() function : usage variations - heredoc string containing quote chars for 'haystack'", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function by passing heredoc string containing quote chars for haystack\n *  and with various needles\n*/\necho \"*** Testing strrchr() function: with heredoc strings ***\\n\";\n$quote_char_str = <<<EOD\n\"things\" \"in\" \"double\" \"quote\"\n'things' 'in' 'single' 'quote'\nEOD;\n$needles = array(\n  \"things\",\n  \"\\\"things\\\"\",\n  \"\\'things\\'\",\n  \"in\",\n  \"quote\",\n  $quote_char_str //needle as haystack\n);\n//loop through to test strrchr() with each needle\nforeach($needles as $needle) {\n  var_dump( strrchr($quote_char_str, $needle) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
