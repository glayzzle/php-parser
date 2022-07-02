// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-in-constant.phpt
  it("Enum in constant", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nclass Baz {\n    const BAR = Foo::Bar;\n}\nvar_dump(Foo::Bar);\nvar_dump(Baz::BAR);\nvar_dump(Foo::Bar === Baz::BAR);\n?>")).toMatchSnapshot();
  });
});
