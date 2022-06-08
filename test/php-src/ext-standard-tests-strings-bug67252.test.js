// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug67252.phpt
  it("Bug #67252 (convert_uudecode out-of-bounds read)", function () {
    expect(parser.parseCode("<?php\n$a = \"M86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A86%A\".\"\\n\".\"a.\";\nvar_dump(convert_uudecode($a));\n?>")).toMatchSnapshot();
  });
});
