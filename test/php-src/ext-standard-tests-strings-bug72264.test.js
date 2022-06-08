// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72264.phpt
  it("Bug #72264 (base64_decode $strict fails with whitespace between padding)", function () {
    expect(parser.parseCode("<?php\nvar_dump(base64_decode(\"VV= =\", true));\n?>")).toMatchSnapshot();
  });
});
