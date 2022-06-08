// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug62922.phpt
  it("Bug #62922: Truncating entire string should result in string", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr(\"\", 0));\nvar_dump(substr(\"a\", 1));\nvar_dump(substr(\"ab\", 2));\n?>")).toMatchSnapshot();
  });
});
