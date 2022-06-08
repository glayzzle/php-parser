// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_022.phpt
  it("Test typed properties delay type check on ast", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = BAR::BAZ * 2;\n}\n$foo = new Foo();\n?>")).toMatchSnapshot();
  });
});
