// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation5.phpt
  it("Test strrpos() function : usage variations - heredoc string containing escape chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function by passing heredoc string containing escape chars for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing strrpos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing escape characters --\\n\";\n$control_char_str = <<<EOD\nHello, World\\n\nHello\\tWorld\nEOD;\nvar_dump( strrpos($control_char_str, \"\\n\") );\nvar_dump( strrpos($control_char_str, \"\\t\") );\nvar_dump( strrpos($control_char_str, \"\\n\", 12) );\nvar_dump( strrpos($control_char_str, \"\\t\", 15) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
