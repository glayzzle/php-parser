// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_repeat_variation1.phpt
  it("Test str_repeat() function: usage variations - complex strings containing other than 7-bit chars", function () {
    expect(parser.parseCode("<?php\n$str = chr(0).chr(128).chr(129).chr(234).chr(235).chr(254).chr(255);\n$withCodePoint = str_repeat($str, chr(51)); // ASCII value of '3' given\n$explicit = str_repeat($str, 3);\nvar_dump($withCodePoint === $explicit);\nvar_dump( bin2hex( $withCodePoint ) );\nvar_dump( bin2hex( $explicit ) );\n?>\nDONE")).toMatchSnapshot();
  });
});
