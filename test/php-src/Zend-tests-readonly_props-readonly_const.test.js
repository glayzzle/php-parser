// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_const.phpt
  it("Class constants cannot be readonly", function () {
    expect(() => parser.parseCode("<?php\nclass Test {\n    readonly const X = 1;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
