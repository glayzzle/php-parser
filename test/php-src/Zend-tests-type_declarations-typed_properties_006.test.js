// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_006.phpt
  it("Test typed properties inheritance (scalar)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $qux;\n}\nclass Bar extends Foo {\n    public string $qux;\n}\n?>")).toMatchSnapshot();
  });
});
