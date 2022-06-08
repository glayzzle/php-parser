// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug77853.phpt
  it("Bug #77853: Inconsistent substr_compare behaviour with empty haystack", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr_compare('', '', 0, 0));\nvar_dump(substr_compare('', '', 0));\nvar_dump(substr_compare('abc', '', 3, 0));\nvar_dump(substr_compare('abc', '', 3));\nvar_dump(substr_compare('abc', \"\\0\", 3));\n?>")).toMatchSnapshot();
  });
});
