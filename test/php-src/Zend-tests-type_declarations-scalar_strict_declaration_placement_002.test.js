// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_002.phpt
  it("Test strict declaration being first operation only 002", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\ndeclare(strict_types=1);\nvar_dump(strlen(\"abc\"));\n?>")).toMatchSnapshot();
  });
});
