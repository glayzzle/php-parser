// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug40704.phpt
  it("Bug #40704 (strip_tags() does not handle single quotes correctly)", function () {
    expect(parser.parseCode("<?php\n$html = \"<div>Bug ' Trigger</div> Missing Text\";\nvar_dump(strip_tags($html));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
