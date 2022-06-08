// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation3.phpt
  it("Test strrpos() function : usage variations - multi line heredoc string for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function by passing multi-line heredoc string for haystack and\n *  with various needles & offsets\n*/\necho \"*** Testing strrpos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing multi lines --\\n\";\n$multi_line_str = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\nvar_dump( strrpos($multi_line_str, \"ing\", 0) );\nvar_dump( strrpos($multi_line_str, \"ing\", 15) );\nvar_dump( strrpos($multi_line_str, \"ing\", 22) );\nvar_dump( strrpos($multi_line_str, \"\") );\nvar_dump( strrpos($multi_line_str, \" \") );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
