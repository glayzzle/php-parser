// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78454_1.phpt
  it("Invalid consecutive numeric separators after hex literal", function () {
    expect(() => parser.parseCode("<?php\n0x0__F;")).toThrowErrorMatchingSnapshot();
  });
});
