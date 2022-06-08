// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/instanceof-unitenum.phpt
  it("Auto implement UnitEnum interface", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nclass Baz {}\nvar_dump(Foo::Bar instanceof UnitEnum);\nvar_dump((new Baz()) instanceof UnitEnum);\n?>")).toMatchSnapshot();
  });
});
