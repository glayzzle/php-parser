// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/zend_signed_multiply-64bit.phpt
  it("Zend signed multiply 64-bit, variation 1", function () {
    expect(parser.parseCode("<?php\nvar_dump(0x80000000 * -0xffffffff);\nvar_dump(0x80000001 * 0xfffffffe);\nvar_dump(0x80000001 * -0xffffffff);\n?>")).toMatchSnapshot();
  });
});
