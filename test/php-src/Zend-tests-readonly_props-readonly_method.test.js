// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_method.phpt
  it("Method cannot be readonly", function () {
    expect(() => parser.parseCode("<?php\nclass Test {\n    readonly function test() {}\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
