// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug50690.phpt
  it("Bug #23650 (putenv() does not assign values when the value is one character)", function () {
    expect(parser.parseCode("<?php\nputenv(\"foo=ab\");\nputenv(\"bar=c\");\nvar_dump(getenv(\"foo\"));\nvar_dump(getenv(\"bar\"));\nvar_dump(getenv(\"thisvardoesnotexist\"));\n?>")).toMatchSnapshot();
  });
});
