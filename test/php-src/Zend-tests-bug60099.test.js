// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60099.phpt
  it("Bug #60099 (__halt_compiler() works in braced namespaces)", function () {
    expect(() => parser.parseCode("<?php\nnamespace foo {\n    __halt_compiler();\n?>")).toThrowErrorMatchingSnapshot();
  });
});
