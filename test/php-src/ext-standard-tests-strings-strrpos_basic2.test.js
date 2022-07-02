// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_basic2.phpt
  it("Test strrpos() function : basic functionality - with all arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strrpos() function: basic functionality ***\\n\";\n$heredoc_str = <<<EOD\nHello, World\nEOD;\necho \"-- With all arguments --\\n\";\n//regular string for haystack & needle, with various offsets\nvar_dump( strrpos(\"Hello, World\", \"Hello\", 0) );\nvar_dump( strrpos(\"Hello, World\", 'Hello', 1) );\nvar_dump( strrpos('Hello, World', 'World', 1) );\nvar_dump( strrpos('Hello, World', \"World\", 5) );\n//heredoc string for haystack & needle, with various offsets\nvar_dump( strrpos($heredoc_str, \"Hello, World\", 0) );\nvar_dump( strrpos($heredoc_str, 'Hello', 0) );\nvar_dump( strrpos($heredoc_str, 'Hello', 1) );\nvar_dump( strrpos($heredoc_str, $heredoc_str, 0) );\nvar_dump( strrpos($heredoc_str, $heredoc_str, 1) );\n//various offsets\nvar_dump( strrpos(\"Hello, World\", \"o\", 3) );\nvar_dump( strrpos(\"Hello, World\", \"o\", 6) );\nvar_dump( strrpos(\"Hello, World\", \"o\", 10) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
