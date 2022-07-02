// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-negative-int.phpt
  it("Backed enum with negative int", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = -1;\n    case Baz = -2;\n}\nvar_dump(Foo::Bar->value);\nvar_dump(Foo::Baz->value);\nvar_dump(Foo::from(-1));\nvar_dump(Foo::from(-2));\n?>")).toMatchSnapshot();
  });
});
