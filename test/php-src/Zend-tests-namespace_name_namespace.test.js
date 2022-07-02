// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/namespace_name_namespace.phpt
  it("Cannot use \"namespace\" as namespace name, due to conflict with ns-relative names", function () {
    expect(parser.parseCode("<?php\nnamespace NAMEspace;\n?>")).toMatchSnapshot();
  });
});
