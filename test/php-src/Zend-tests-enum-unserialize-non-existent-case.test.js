// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize-non-existent-case.phpt
  it("Enum unserialize non-existent case", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nvar_dump(unserialize('E:7:\"Foo:Baz\";'));\n?>")).toMatchSnapshot();
  });
});
