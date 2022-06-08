// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/namespaced_name_whitespace.phpt
  it("Whitespace between namespace separators is no longer allowed", function () {
    expect(() => parser.parseCode("<?php\nFoo \\ Bar \\ Baz;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
