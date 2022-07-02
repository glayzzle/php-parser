// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation4.phpt
  it("Test stripos() function : usage variations - heredoc string containing special chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function by passing heredoc string containing special chars for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing stripos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing special chars --\\n\";\n$special_chars_str = <<<EOD\nEx'ple of h'doc st'g, contains\n$#%^*&*_(\"_\")!#@@!$#$^^&$*(special)\nchars.\nEOD;\nvar_dump( stripos($special_chars_str, \"Ex'ple\", 0) );\nvar_dump( stripos($special_chars_str, \"!@@!\", 23) );\nvar_dump( stripos($special_chars_str, '_') );\nvar_dump( stripos($special_chars_str, '(\"_\")') );\nvar_dump( stripos($special_chars_str, \"$*\") );\nvar_dump( stripos($special_chars_str, \"$*\", 10) );\nvar_dump( stripos($special_chars_str, \"(special)\") );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
