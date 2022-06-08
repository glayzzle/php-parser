// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-unsed-value.phpt
  it("Enum prevent unsetting value", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\nunset(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
