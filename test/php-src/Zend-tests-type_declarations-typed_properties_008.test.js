// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_008.phpt
  it("Test typed properties inheritance (missing info)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $qux;\n}\nclass Bar extends Foo {\n    public $qux;\n}\n?>")).toMatchSnapshot();
  });
});
