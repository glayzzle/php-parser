// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation3.phpt
  it("Test stripos() function : usage variations - multi line heredoc string for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function by passing multi-line heredoc string for haystack and\n *  with various needles & offsets\n*/\necho \"*** Testing stripos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing multi lines --\\n\";\n$multi_line_str = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\nvar_dump( stripos($multi_line_str, \"ing\", 0) );\nvar_dump( stripos($multi_line_str, \"ing\", 15) );\nvar_dump( stripos($multi_line_str, \"ing\", 22) );\nvar_dump( stripos($multi_line_str, \"\") );\nvar_dump( stripos($multi_line_str, \" \") );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
