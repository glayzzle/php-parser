// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_014.phpt
  it("Test typed properties disallow incorrect type initial value (array)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public array $bar = 32;\n}\n?>")).toMatchSnapshot();
  });
});
