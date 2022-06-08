// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation6.phpt
  it("Test stripos() function : usage variations - heredoc string containing quotes for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function by passing heredoc string containing quotes for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing stripos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing quote & slash chars --\\n\";\n$quote_char_str = <<<EOD\nit's bright,but i cann't see it.\n\"things in double quote\"\n'things in single quote'\nthis\\line is /with\\slashs\nEOD;\nvar_dump( stripos($quote_char_str, \"line\") );\nvar_dump( stripos($quote_char_str, 'things') );\nvar_dump( stripos($quote_char_str, 'things', 0) );\nvar_dump( stripos($quote_char_str, \"things\", 20) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
