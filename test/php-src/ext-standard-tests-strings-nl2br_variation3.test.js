// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl2br_variation3.phpt
  it("Test nl2br() function : usage variations - heredoc strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Test nl2br() function by passing heredoc strings containing various\n *   combinations of new line chars to 'str' argument\n*/\necho \"*** Testing nl2br() : usage variations ***\\n\";\n//heredoc string containing new line chars(\\n, \\r and combinations of \\r & \\n) and new lines\n$heredoc_str1 = <<<EOD\n\\n\n\\r\n\\r\\n\n\\nnn\\n\\n\\nn\n\\rrr\\r\\r\\rr\n\\n\\r\\n\\r\\r\\n\\nr\\rn\nEOD;\n//heredoc string containing embedded 'new line chars'/'new lines' in the string\n$heredoc_str2 = <<<EOD\nHello\\nWorld\\r\nThis is \\tes\\t for \\n \\new lines\nlike \\n \\r\\n \\r \\n\\r and etc\nEOD;\nvar_dump(nl2br($heredoc_str1) );\nvar_dump(nl2br($heredoc_str2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
