// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_003.phpt
  it("Test strict declaration being first operation only 003", function () {
    expect(parser.parseCode("hi<?php\ndeclare(strict_types=1);\nvar_dump(strlen(32));\n?>")).toMatchSnapshot();
  });
});
