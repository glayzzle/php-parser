// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_without_type.phpt
  it("Readonly property without type", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    protected readonly $prop;\n}\n?>")).toMatchSnapshot();
  });
});
