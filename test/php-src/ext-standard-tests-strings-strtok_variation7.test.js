// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_variation7.phpt
  it("Test strtok() function : usage variations - modifying the input string while tokenising", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : modifying the input string while it is getting tokenised\n*/\necho \"*** Testing strtok() : with modification of input string in between tokenising ***\\n\";\n$str = \"this is a sample string\";\n$token = \" \";\necho \"\\n*** Testing strtok() when string being tokenised is prefixed with another string in between the process ***\\n\";\nvar_dump( strtok($str, $token) );\n// adding a string to the input string which is being tokenised\n$str = \"extra string \".$str;\nfor( $count = 1; $count <=6; $count++ )  {\n  echo \"\\n-- Token $count is --\\n\";\n  var_dump( strtok($token) );\n  echo \"\\n-- Input str is \\\"$str\\\" --\\n\";\n}\necho \"\\n*** Testing strtok() when string being tokenised is suffixed with another string in between the process ***\\n\";\nvar_dump( strtok($str, $token) );\n// adding a string to the input string which is being tokenised\n$str = $str.\" extra string\";\nfor( $count = 1; $count <=10; $count++ )  {\n  echo \"\\n-- Token $count is --\\n\";\n  var_dump( strtok($token) );\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
