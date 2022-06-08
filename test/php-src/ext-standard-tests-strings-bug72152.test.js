// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72152.phpt
  it("Bug #72152 (base64_decode $strict fails to detect null byte)", function () {
    expect(parser.parseCode("<?php\nvar_dump(base64_decode(\"\\x00\", true));\nvar_dump(base64_decode(\"\\x00VVVV\", true));\nvar_dump(base64_decode(\"VVVV\\x00\", true));\n?>")).toMatchSnapshot();
  });
});
