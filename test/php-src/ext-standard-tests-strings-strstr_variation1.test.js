// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strstr_variation1.phpt
  it("Test strstr() function : usage variations - complex strings containing other than 7-bit chars", function () {
    expect(parser.parseCode("<?php\n$string = chr(0).chr(128).chr(129).chr(234).chr(235).chr(254).chr(255);\n$stringAsHex = bin2hex($string);\necho \"-- Positions of some chars in the string '$stringAsHex' are as follows --\\n\";\necho bin2hex( chr(128) ) .\" => \";\nvar_dump( bin2hex( strstr($string, chr(128) ) ) );\necho bin2hex( chr(255) ) .\" => \";\nvar_dump( bin2hex( strstr($string, chr(255) ) ) );\necho bin2hex( chr(256) ) .\" => \";\nvar_dump( bin2hex( strstr($string, chr(256) ) ) );\n?>\nDONE")).toMatchSnapshot();
  });
});
