// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-static-properties.phpt
  it("Enum disallows static properties", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    public static $bar;\n}\n?>")).toMatchSnapshot();
  });
});
