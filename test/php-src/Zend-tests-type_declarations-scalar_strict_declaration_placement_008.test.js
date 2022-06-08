// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_008.phpt
  it("Test strict declaration block declaration 008", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1) {\n    var_dump(strlen(\"abc\"));\n}\n?>")).toMatchSnapshot();
  });
});
