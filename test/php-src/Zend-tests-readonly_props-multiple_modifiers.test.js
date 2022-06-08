// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/multiple_modifiers.phpt
  it("Cannot use multiple readonly modifiers", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    readonly readonly int $prop;\n}\n?>")).toMatchSnapshot();
  });
});
