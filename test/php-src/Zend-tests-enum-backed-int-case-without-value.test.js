// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-int-case-without-value.phpt
  it("Int backed enums with case without value", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar;\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
