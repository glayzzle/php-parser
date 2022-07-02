// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79382.phpt
  it("Bug #79382: Cannot redeclare disabled function", function () {
    expect(parser.parseCode("<?php\nfunction strlen(string $x): int {\n    return 42;\n}\nvar_dump(strlen(\"foobar\"));\n?>")).toMatchSnapshot();
  });
});
