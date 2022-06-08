// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_109.phpt
  it("Test typed properties disallow never", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public never $int;\n}\n$foo = new Foo();\n?>")).toMatchSnapshot();
  });
});
