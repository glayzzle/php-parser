// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/trim_error.phpt
  it("Test trim() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing trim() : error conditions ***\\n\";\n$hello = \"  Hello World\\n\";\necho \"\\n-- Test trim function with various invalid charlists --\\n\";\nvar_dump(trim($hello, \"..a\"));\nvar_dump(trim($hello, \"a..\"));\nvar_dump(trim($hello, \"z..a\"));\nvar_dump(trim($hello, \"a..b..c\"));\n?>")).toMatchSnapshot();
  });
});
