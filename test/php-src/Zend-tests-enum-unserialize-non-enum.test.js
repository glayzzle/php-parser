// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize-non-enum.phpt
  it("Enum unserialize non-enum", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nvar_dump(unserialize('E:7:\"Foo:Bar\";'));\n?>")).toMatchSnapshot();
  });
});
