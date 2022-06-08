// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-int-const-invalid-expr.phpt
  it("Int enum invalid const expr", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 1 + $x;\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
