// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-int-const-expr.phpt
  it("Int enum const expr", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 1 << 0;\n    case Baz = 1 << 1;\n    case Qux = 1 << 2;\n}\nvar_dump(Foo::Bar->value);\nvar_dump(Foo::Baz->value);\nvar_dump(Foo::Qux->value);\n?>")).toMatchSnapshot();
  });
});
