// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readwrite_to_readonly.phpt
  it("Cannot replace readwrite with readonly", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public int $prop;\n}\nclass B extends A {\n    public readonly int $prop;\n}\n?>")).toMatchSnapshot();
  });
});
