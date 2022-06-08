// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_basic1.phpt
  it("Test strripos() function : basic functionality - with default arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strripos() function: basic functionality ***\\n\";\n$heredoc_str = <<<EOD\nHello, World\nEOD;\necho \"\\n-- regular string for haystack & needle --\\n\";\nvar_dump( strripos(\"Hello, World\", \"HeLLo\") );\nvar_dump( strripos('Hello, World', \"hello\") );\nvar_dump( strripos(\"Hello, World\", 'WoRLd') );\nvar_dump( strripos('Hello, World', 'WORLD') );\nvar_dump( strripos('Hello, World', 'foo') );\necho \"\\n-- single char for needle --\\n\";\nvar_dump( strripos(\"Hello, World\", \"O\") );\nvar_dump( strripos(\"Hello, World\", \",\") );\necho \"\\n-- heredoc string for haystack & needle --\\n\";\nvar_dump( strripos($heredoc_str, \"Hello, WoRLd\") );\nvar_dump( strripos($heredoc_str, 'HelLO') );\nvar_dump( strripos($heredoc_str, $heredoc_str) );\n?>")).toMatchSnapshot();
  });
});
