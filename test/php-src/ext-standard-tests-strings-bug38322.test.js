// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug38322.phpt
  it("Bug #38322 (reading past array in sscanf() leads to segfault/arbitrary code execution)", function () {
    expect(parser.parseCode("<?php\n$str = \"a b c d e\";\nvar_dump(sscanf(\"a \",'%1$s',$str));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
