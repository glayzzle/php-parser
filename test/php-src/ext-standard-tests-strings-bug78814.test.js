// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78814.phpt
  it("Bug #78814 (strip_tags allows / in tag name => whitelist bypass)", function () {
    expect(parser.parseCode("<?php\necho strip_tags(\"<s/trong>b</strong>\", \"<strong>\");\n?>")).toMatchSnapshot();
  });
});
