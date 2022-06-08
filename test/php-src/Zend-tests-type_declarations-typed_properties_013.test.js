// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_013.phpt
  it("Test typed properties disallow incorrect type initial value (scalar)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = \"string\";\n}\n?>")).toMatchSnapshot();
  });
});
