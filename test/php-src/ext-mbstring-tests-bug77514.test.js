// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77514.phpt
  it("Bug #77514: mb_ereg_replace() with trailing backslash adds null byte", function () {
    expect(parser.parseCode("<?php\n$a=\"abc123\";\nvar_dump(mb_ereg_replace(\"123\",\"def\\\\\",$a));\n?>")).toMatchSnapshot();
  });
});
