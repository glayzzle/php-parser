// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77993.phpt
  it("Bug #77993 (Wrong parse error for invalid hex literal on Windows)", function () {
    expect(() => parser.parseCode("<?php\n0xg10;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
