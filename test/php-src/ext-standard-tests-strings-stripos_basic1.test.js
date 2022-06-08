// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_basic1.phpt
  it("Test stripos() function : basic functionality - with default arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stripos() function: basic functionality ***\\n\";\n$heredoc_str = <<<Identifier\nHello, World\nIdentifier;\necho \"-- With default arguments --\\n\";\n//regular string for haystack & needle\nvar_dump( stripos(\"Hello, World\", \"Hello\") );\nvar_dump( stripos('Hello, World', \"hello\") );\nvar_dump( stripos(\"Hello, World\", 'World') );\nvar_dump( stripos('Hello, World', 'WORLD') );\n//single char for needle\nvar_dump( stripos(\"Hello, World\", \"o\") );\nvar_dump( stripos(\"Hello, World\", \",\") );\n//heredoc string for haystack & needle\nvar_dump( stripos($heredoc_str, \"Hello, World\") );\nvar_dump( stripos($heredoc_str, 'Hello') );\nvar_dump( stripos($heredoc_str, $heredoc_str) );\n//non-existing needle in haystack\nvar_dump( stripos(\"Hello, World\", \"ooo\") );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
