// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation9.phpt
  it("Test extract() function (variation 9)", function () {
    expect(parser.parseCode("<?php\n/* Using Class and objects */\necho \"\\n*** Testing for object ***\\n\";\nclass classA\n{\n  public  $v;\n}\n$A = new classA();\nvar_dump ( extract(get_object_vars($A),EXTR_REFS));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
