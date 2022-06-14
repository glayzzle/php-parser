// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-properties.phpt
  it("Enum disallows properties", function () {
    expect(() => parser.parseCode("<?php\nenum Foo {\n    public $bar;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
