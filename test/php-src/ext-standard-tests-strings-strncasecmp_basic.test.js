// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncasecmp_basic.phpt
  it("Test strncasecmp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strncasecmp() function: basic functionality ***\\n\";\necho \"-- Testing strncasecmp() with single quoted string --\\n\";\nvar_dump( strncasecmp('Hello', 'Hello', 5) );  //expected: int(0)\nvar_dump( strncasecmp('Hello', 'Hi', 5) );  //expected: value < 0\nvar_dump( strncasecmp('Hi', 'Hello', 5) );  //expected: value > 0\necho \"-- Testing strncasecmp() with double quoted string --\\n\";\nvar_dump( strncasecmp(\"Hello\", \"Hello\", 5) );  //expected: int(0)\nvar_dump( strncasecmp(\"Hello\", \"Hi\", 5) );  //expected: value < 0\nvar_dump( strncasecmp(\"Hi\", \"Hello\", 5) );  //expected: value > 0\necho \"-- Testing strncasecmp() with here-doc string --\\n\";\n$str = <<<HEREDOC\nHello\nHEREDOC;\nvar_dump( strncasecmp($str, \"Hello\", 5) );  //expected: int(0)\nvar_dump( strncasecmp($str, \"Hi\", 5) );  //expected: value < 0\nvar_dump( strncasecmp(\"Hi\", $str, 5) );  //expected: value > 0\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
