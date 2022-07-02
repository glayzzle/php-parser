// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_to_readwrite.phpt
  it("Cannot replace readonly with readwrite", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public readonly int $prop;\n}\nclass B extends A {\n    public int $prop;\n}\n?>")).toMatchSnapshot();
  });
});
