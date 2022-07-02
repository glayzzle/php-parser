// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_basic2.phpt
  it("Test strripos() function : basic functionality - with all arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strripos() function: basic functionality ***\\n\";\n$heredoc_str = <<<EOD\nHello, World\nEOD;\necho \"\\n-- regular string for haystack & needle, with various offsets --\\n\";\nvar_dump( strripos(\"Hello, World\", \"HeLLo\", 0) );\nvar_dump( strripos(\"Hello, World\", 'Hello', 1) );\nvar_dump( strripos('Hello, World', 'world', 1) );\nvar_dump( strripos('Hello, World', \"WorLD\", 5) );\necho \"\\n-- heredoc string for haystack & needle, with various offsets --\\n\";\nvar_dump( strripos($heredoc_str, \"Hello, WORLD\", 0) );\nvar_dump( strripos($heredoc_str, 'HelLo', 0) );\nvar_dump( strripos($heredoc_str, 'HeLLo', 1) );\nvar_dump( strripos($heredoc_str, $heredoc_str, 0) );\nvar_dump( strripos($heredoc_str, $heredoc_str, 1) );\necho \"\\n-- various +ve offsets --\\n\";\nvar_dump( strripos(\"Hello, World\", \"O\", 3) );\nvar_dump( strripos(\"Hello, World\", \"O\", 6) );\nvar_dump( strripos(\"Hello, World\", \"O\", 10) );\necho \"\\n-- various -ve offsets --\\n\";\nvar_dump( strripos(\"Hello, World\", \"O\", -1) );\nvar_dump( strripos(\"Hello, World\", \"O\", -5) );\nvar_dump( strripos(\"Hello, World\", \"O\",  -9) );\n?>")).toMatchSnapshot();
  });
});
