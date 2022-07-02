// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug55451.phpt
  it("Bug #55451 (substr_compare with NULL as default length)", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr_compare(\"abcde\", \"ABCD\", 0, NULL, false) != 0);\nvar_dump(substr_compare(\"abcde\", \"ABCD\", 0, NULL, true) != 0);\nvar_dump(substr_compare(\"abcde\", \"ABCDE\", 0, NULL, false) != 0);\nvar_dump(substr_compare(\"abcde\", \"ABCDE\", 0, NULL, true) == 0);\n?>")).toMatchSnapshot();
  });
});
