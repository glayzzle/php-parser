// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation1.phpt
  it("Test extract() function (variation 1)", function () {
    expect(parser.parseCode("<?php\n$val = 4;\n$str = \"John\";\nvar_dump($val);\nvar_dump($str);\n/* Extracting Global Variables */\nvar_dump(extract($GLOBALS, EXTR_REFS));\nvar_dump($val);\nvar_dump($str);\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
