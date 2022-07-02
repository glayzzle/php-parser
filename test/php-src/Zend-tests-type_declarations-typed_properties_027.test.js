// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_027.phpt
  it("Test typed properties float widen at runtime", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public float $bar = 1.1;\n}\n$foo = new Foo;\n$foo->bar = 10;\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
