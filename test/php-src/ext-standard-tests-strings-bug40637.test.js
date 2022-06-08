// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug40637.phpt
  it("Bug #40637 (strip_tags() does not handle single quotes correctly)", function () {
    expect(parser.parseCode("<?php\n$html = '<span title=\"Bug \\' Trigger\">Text</span>';\nvar_dump(strip_tags($html));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
