// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_basic.phpt
  it("Test strncmp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strncmp() function: basic functionality ***\\n\";\necho \"-- Testing strncmp() with single quoted string --\\n\";\nvar_dump( strncmp('Hello', 'Hello', 5) );  //expected: int(0)\nvar_dump( strncmp('Hello', 'Hi', 5) );  //expected: value < 0\nvar_dump( strncmp('Hi', 'Hello', 5) );  //expected: value > 0\necho \"-- Testing strncmp() with double quoted string --\\n\";\nvar_dump( strncmp(\"Hello\", \"Hello\", 5) );  //expected: int(0)\nvar_dump( strncmp(\"Hello\", \"Hi\", 5) );  //expected: value < 0\nvar_dump( strncmp(\"Hi\", \"Hello\", 5) );  //expected: value > 0\necho \"-- Testing strncmp() with here-doc string --\\n\";\n$str = <<<HEREDOC\nHello\nHEREDOC;\nvar_dump( strncmp($str, \"Hello\", 5) );  //expected: int(0)\nvar_dump( strncmp($str, \"Hi\", 5) );  //expected: value < 0\nvar_dump( strncmp(\"Hi\", $str, 5) );  //expected: value > 0\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
