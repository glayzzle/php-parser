// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug62443.phpt
  it("Bug #62443 Crypt SHA256/512 Segfaults With Malformed Salt", function () {
    expect(parser.parseCode("<?php\ncrypt(\"foo\", '$5$'.chr(0).'abc');\ncrypt(\"foo\", '$6$'.chr(0).'abc');\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
