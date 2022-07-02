// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_015.phpt
  it("Test typed properties disallow incorrect type initial value (object)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public stdClass $bar = null;\n}\n?>")).toMatchSnapshot();
  });
});
