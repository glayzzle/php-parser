// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/instanceof.phpt
  it("Enum instanceof", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum Baz {\n    case Qux;\n}\nvar_dump(Foo::Bar instanceof Foo);\nvar_dump(Baz::Qux instanceof Baz);\nvar_dump(Foo::Bar instanceof Baz);\nvar_dump(Baz::Qux instanceof Foo);\n?>")).toMatchSnapshot();
  });
});
