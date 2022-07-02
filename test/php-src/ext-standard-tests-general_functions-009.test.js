// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/009.phpt
  it("SHA1", function () {
    expect(parser.parseCode("<?php\nfunction test($str) {\n    $res = sha1($str).\"\\n\";\n    return $res;\n}\necho test(\"\");\necho test(\"a\");\necho test(\"abc\");\necho test(\"message digest\");\necho test(\"abcdefghijklmnopqrstuvwxyz\");\necho test(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\");\necho test(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\");\n?>")).toMatchSnapshot();
  });
});
