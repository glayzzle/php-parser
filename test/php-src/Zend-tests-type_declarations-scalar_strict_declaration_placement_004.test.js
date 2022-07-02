// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_004.phpt
  it("Test strict declaration being first operation only 004", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nnamespace Foo {\n    function add1(int $arg): int {\n        return $arg + 1;\n    }\n}\nnamespace {\n    var_dump(Foo\\add1(123));\n}\n?>")).toMatchSnapshot();
  });
});
