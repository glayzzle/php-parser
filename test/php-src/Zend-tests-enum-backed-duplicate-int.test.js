// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-duplicate-int.phpt
  it("Backed enums reject duplicate int values", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n    case Baz = 0;\n}\n?>")).toMatchSnapshot();
  });
});
