// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-value-property.phpt
  it("Enum disallows value property", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    public int $value;\n}\n?>")).toMatchSnapshot();
  });
});
