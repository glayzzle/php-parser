// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78454_2.phpt
  it("Invalid consecutive numeric separators after binary literal", function () {
    expect(() => parser.parseCode("<?php\n0b0__1")).toThrowErrorMatchingSnapshot();
  });
});
