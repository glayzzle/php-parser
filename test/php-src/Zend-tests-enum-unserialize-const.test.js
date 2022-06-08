// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize-const.phpt
  it("Enum unserialize const", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    const Baz = Foo::Bar;\n}\nvar_dump(unserialize('E:7:\"Foo:Baz\";'));\n?>")).toMatchSnapshot();
  });
});
