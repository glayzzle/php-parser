// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug26878.phpt
  it("Bug #26878 (problem with multiple references to the same variable with different types)", function () {
    expect(parser.parseCode("<?php\n    printf('Int: %1$d and as string: %1$s', 'some string');\n    echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
