// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize-missing-colon.phpt
  it("Enum unserialize with missing colon", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nvar_dump(unserialize('E:6:\"FooBar\";'));\n?>")).toMatchSnapshot();
  });
});
