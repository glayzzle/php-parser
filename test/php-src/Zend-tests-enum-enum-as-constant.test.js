// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-as-constant.phpt
  it("Enum cases can be referenced by constants", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nconst Beep = Foo::Bar;\nclass Test {\n    const Beep = Foo::Bar;\n}\nvar_dump(Beep);\nvar_dump(Test::Beep);\n?>")).toMatchSnapshot();
  });
});
