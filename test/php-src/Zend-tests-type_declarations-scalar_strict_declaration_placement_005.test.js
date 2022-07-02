// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_005.phpt
  it("Test strict declaration being first operation only 005", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nnamespace Foo;\nvar_dump(strlen(\"abc\"));\n?>")).toMatchSnapshot();
  });
});
