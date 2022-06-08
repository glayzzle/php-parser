// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_variation4.phpt
  it("Test strripos() function : usage variations - heredoc string containing special chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strripos() function by passing heredoc string containing special chars for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing strripos() function: with heredoc strings ***\\n\";\necho \"-- With heredoc string containing special chars --\\n\";\n$special_chars_str = <<<EOD\nEx'ple of h'doc st'g, contains\n$#%^*&*_(\"_\")!#@@!$#$^^&$*(special)\nchars.\nEOD;\nvar_dump( strripos($special_chars_str, \"Ex'pLE\", 0) );\nvar_dump( strripos($special_chars_str, \"!@@!\", 23) );\nvar_dump( strripos($special_chars_str, '_') );\nvar_dump( strripos($special_chars_str, '(\"_\")') );\nvar_dump( strripos($special_chars_str, \"$*\") );\nvar_dump( strripos($special_chars_str, \"$*\", 10) );\nvar_dump( strripos($special_chars_str, \"(speCIal)\") );\n?>")).toMatchSnapshot();
  });
});
