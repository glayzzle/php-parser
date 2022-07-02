// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/namespace_name_namespace_start.phpt
  it("Cannot use \"namespace\\xyz\" as namespace name, due to conflict with ns-relative names", function () {
    expect(() => parser.parseCode("<?php\nnamespace NAMEspace\\xyz;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
