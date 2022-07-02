// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53971.phpt
  it("Bug #53971 (isset() and empty() produce apparently spurious runtime error)", function () {
    expect(parser.parseCode("<?php\n$s = \"\";\nvar_dump(isset($s[0][0]));\n?>")).toMatchSnapshot();
  });
});
