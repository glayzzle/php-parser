// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_025.phpt
  it("Test typed properties type must precede first declaration in group", function () {
    expect(() => parser.parseCode("<?php\nclass Foo {\n    public $bar,\n           int $qux;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
