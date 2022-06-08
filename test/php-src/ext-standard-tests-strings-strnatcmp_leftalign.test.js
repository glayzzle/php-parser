// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strnatcmp_leftalign.phpt
  it("Test strnatcmp() function : left align, whitespace, digits", function () {
    expect(parser.parseCode("<?php\necho \"-- Testing strnatcmp() function whitespace, left-align, digit --\\n\";\necho \"-- Leading whitespace, digits, string 1 longer --\\n\";\n$str1 = \" 00\";\n$str2 = \" 0\";\nvar_dump( strnatcmp( $str1, $str2) );\necho \"-- Leading whitespace, digits, string 2 longer --\\n\";\n$str1 = \" 0\";\n$str2 = \" 00\";\nvar_dump( strnatcmp( $str1, $str2) );\n?>")).toMatchSnapshot();
  });
});
