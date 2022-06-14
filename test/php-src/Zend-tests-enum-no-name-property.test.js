// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-name-property.phpt
  it("Enum disallows name property", function () {
    expect(() => parser.parseCode("<?php\nenum Foo {\n    public string $name;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
