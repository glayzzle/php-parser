// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug20927.phpt
  it("Bug #20927 (Segfault on wordwrap statement)", function () {
    expect(parser.parseCode("<?php\n$string\t\t= str_repeat(\"1234567890 X \", 10);\n$break\t\t= str_repeat(\"a-very-long-break-string-to-clobber-the-heap\", 8);\n$linelength\t= 10;\necho \"Length of original string:  \".strlen($string).\"\\n\";\necho \"Length of break string:     \".strlen($break).\"\\n\";\nvar_dump(wordwrap($string, $linelength, $break, 1));\n?>")).toMatchSnapshot();
  });
});
