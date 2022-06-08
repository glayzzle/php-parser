// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bin2hex.phpt
  it("bin2hex() function", function () {
    expect(parser.parseCode("<?php\n$s = '';\nfor($i=0; $i<256; $i++) {\n    $s .= chr($i);\n}\necho bin2hex($s).\"\\n\";\necho bin2hex(\"abc\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
