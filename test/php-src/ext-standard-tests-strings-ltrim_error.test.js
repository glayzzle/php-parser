// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ltrim_error.phpt
  it("Test ltrim() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ltrim() : error conditions ***\\n\";\n$hello = \"  Hello World\\n\";\necho \"\\n-- Test ltrim function with various invalid charlists\\n\";\nvar_dump(ltrim($hello, \"..a\"));\nvar_dump(ltrim($hello, \"a..\"));\nvar_dump(ltrim($hello, \"z..a\"));\nvar_dump(ltrim($hello, \"a..b..c\"));\n?>")).toMatchSnapshot();
  });
});
