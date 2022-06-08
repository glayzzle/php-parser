// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_basic1.phpt
  it("Test strrpos() function : basic functionality - with default arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strrpos() function: basic functionality ***\\n\";\n$heredoc_str = <<<EOD\nHello, World\nEOD;\necho \"-- With default arguments --\\n\";\n//regular string for haystack & needle\nvar_dump( strrpos(\"Hello, World\", \"Hello\") );\nvar_dump( strrpos('Hello, World', \"hello\") );\nvar_dump( strrpos(\"Hello, World\", 'World') );\nvar_dump( strrpos('Hello, World', 'WORLD') );\n//single char for needle\nvar_dump( strrpos(\"Hello, World\", \"o\") );\nvar_dump( strrpos(\"Hello, World\", \",\") );\n//heredoc string for haystack & needle\nvar_dump( strrpos($heredoc_str, \"Hello, World\") );\nvar_dump( strrpos($heredoc_str, 'Hello') );\nvar_dump( strrpos($heredoc_str, $heredoc_str) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
