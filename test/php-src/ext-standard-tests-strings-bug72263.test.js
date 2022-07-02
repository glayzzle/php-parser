// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72263.phpt
  it("Bug #72263 (base64_decode skips a character after padding in strict mode)", function () {
    expect(parser.parseCode("<?php\nvar_dump(base64_decode(\"*\", true));\nvar_dump(base64_decode(\"=*\", true));\nvar_dump(base64_decode(\"VVV=\", true));\nvar_dump(base64_decode(\"VVV=*\", true));\n?>")).toMatchSnapshot();
  });
});
