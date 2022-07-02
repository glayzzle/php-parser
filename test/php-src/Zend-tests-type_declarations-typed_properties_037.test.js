// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_037.phpt
  it("Test typed properties var_dump uninitialized", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public int $bar = 10, $qux;\n};\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
