// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_017.phpt
  it("Test typed properties disallow void", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public void $int;\n}\n$foo = new Foo();\n?>")).toMatchSnapshot();
  });
});
