// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/var_dump-nested.phpt
  it("Enum var_dump nested", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nvar_dump([[Foo::Bar]]);\n?>")).toMatchSnapshot();
  });
});
