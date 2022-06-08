// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/rtrim_error.phpt
  it("Test rtrim() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rtrim() : error conditions ***\\n\";\n$hello = \"  Hello World\\n\";\necho \"\\n-- Test rtrim function with various invalid charlists\\n\";\nvar_dump(rtrim($hello, \"..a\"));\nvar_dump(rtrim($hello, \"a..\"));\nvar_dump(rtrim($hello, \"z..a\"));\nvar_dump(rtrim($hello, \"a..b..c\"));\n?>")).toMatchSnapshot();
  });
});
