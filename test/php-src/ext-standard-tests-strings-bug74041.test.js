// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug74041.phpt
  it("Bug #74041: substr_count with length=0 broken", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr_count(\"aaa\", \"a\", 0, 0));\nvar_dump(substr_count(\"\", \"a\", 0, 0));\n?>")).toMatchSnapshot();
  });
});
