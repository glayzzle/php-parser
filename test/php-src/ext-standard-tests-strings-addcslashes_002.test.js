// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/addcslashes_002.phpt
  it("Test addcslashes() function (variation 2)", function () {
    expect(parser.parseCode("<?php\n$string = \"goodyear12345NULL\\0truefalse\\a\\v\\f\\b\\n\\r\\t\";\n/* charlist \"\\0..\\37\" would escape all characters with ASCII code between 0 and 31 */\necho \"\\n*** Testing addcslashes() with ASCII code between 0 and 31 ***\\n\";\nvar_dump( addcslashes($string, \"\\0..\\37\") );\n/* Checking OBJECTS type */\necho \"\\n*** Testing addcslashes() with objects ***\\n\";\nclass string1\n{\n  public function __toString() {\n    return \"Object\";\n  }\n}\n$obj = new string1;\nvar_dump( addcslashes($obj, \"b\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
