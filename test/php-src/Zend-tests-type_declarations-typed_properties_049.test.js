// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_049.phpt
  it("Nullable typed property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $foo = null;\n}\n?>")).toMatchSnapshot();
  });
});
