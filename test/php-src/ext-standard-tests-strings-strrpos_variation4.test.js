// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation4.phpt
  it("Test strrpos() function : usage variations - heredoc string containing special chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function by passing heredoc string containing special chars for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing strrpos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing special chars --\\n\";\n$special_chars_str = <<<EOD\nEx'ple of h'doc st'g, contains\n$#%^*&*_(\"_\")!#@@!$#$^^&$*(special)\nchars.\nEOD;\nvar_dump( strrpos($special_chars_str, \"Ex'ple\", 0) );\nvar_dump( strrpos($special_chars_str, \"!@@!\", 23) );\nvar_dump( strrpos($special_chars_str, '_') );\nvar_dump( strrpos($special_chars_str, '(\"_\")') );\nvar_dump( strrpos($special_chars_str, \"$*\") );\nvar_dump( strrpos($special_chars_str, \"$*\", 10) );\nvar_dump( strrpos($special_chars_str, \"(special)\") );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
