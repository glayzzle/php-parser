// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug64879.phpt
  it("Bug #64879: quoted_printable_encode() wrong size calculation (CVE-2013-2110)", function () {
    expect(parser.parseCode("<?php\nquoted_printable_encode(str_repeat(\"\\xf4\", 1000));\nquoted_printable_encode(str_repeat(\"\\xf4\", 100000));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
