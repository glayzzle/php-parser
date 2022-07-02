// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_099.phpt
  it("Check that iterating a typed property by reference adds a type source", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public array $ary = [];\n}\n$test = new Test;\nforeach ($test->ary as &$value) {}\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
