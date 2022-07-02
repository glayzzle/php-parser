// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strpbrk_basic.phpt
  it("Test strpbrk() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strpbrk() : basic functionality ***\\n\";\n// Initialise all required variables\n$text = 'This is a Simple text.';\nvar_dump( strpbrk($text, 'mi') );\nvar_dump( strpbrk($text, 'ZS') );\nvar_dump( strpbrk($text, 'Z') );\nvar_dump( strpbrk($text, 'H') );\n$text = '';\nvar_dump( strpbrk($text, 'foo') );\n$text = \"  aaa aaaSLR\";\nvar_dump( strpbrk($text, '     ') );\nvar_dump( strpbrk(5, 5) );\nvar_dump( strpbrk(5, \"5\") );\n?>")).toMatchSnapshot();
  });
});
