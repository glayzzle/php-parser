// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_basic.phpt
  it("Test strtok() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : basic functionality\n*/\necho \"*** Testing strtok() : basic functionality ***\\n\";\n// Initialize all required variables\n$str = 'This testcase test strtok() function.';\n$token = ' ().';\necho \"\\nThe Input string is:\\n\\\"$str\\\"\\n\";\necho \"\\nThe token string is:\\n\\\"$token\\\"\\n\";\n// using strtok() with $str argument\necho \"\\n--- Token 1 ---\\n\";\nvar_dump( strtok($str, $token) );\nfor( $i = 2; $i <=7; $i++ )  {\n  echo \"\\n--- Token $i ---\\n\";\n  var_dump( strtok($token) );\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
