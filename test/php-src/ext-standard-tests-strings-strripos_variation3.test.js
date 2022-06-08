// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_variation3.phpt
  it("Test strripos() function : usage variations - multi line heredoc string for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strripos() function by passing multi-line heredoc string for haystack and\n *  with various needles & offsets\n*/\necho \"*** Testing strripos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing multi lines --\\n\";\n$multi_line_str = <<<EOD\nExample of string\nspanning multiple lines\nusing heredoc syntax.\nEOD;\necho \"\\n-- Multi line strings with +ve offsets -- \\n\";\nvar_dump( strripos($multi_line_str, \"iNg\", 0) );\nvar_dump( strripos($multi_line_str, \"inG\", 15) );\nvar_dump( strripos($multi_line_str, \"Ing\", 22) );\necho \"\\n-- Multi line strings with +ve offsets -- \\n\";\nvar_dump( strripos($multi_line_str, \"Ing\", -1) );\nvar_dump( strripos($multi_line_str, \"Ing\", -17) );\nvar_dump( strripos($multi_line_str, \"Ing\", -50) );\necho \"\\n-- Multi line strings with no offset -- \\n\";\nvar_dump( strripos($multi_line_str, \"spAn\") );\nvar_dump( strripos($multi_line_str, \"IPlE\") );\nvar_dump( strripos($multi_line_str, \"\") );\nvar_dump( strripos($multi_line_str, \" \") );\n?>")).toMatchSnapshot();
  });
});
