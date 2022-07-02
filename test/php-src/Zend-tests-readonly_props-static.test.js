// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/static.phpt
  it("Readonly static property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static readonly int $prop;\n}\n?>")).toMatchSnapshot();
  });
});
