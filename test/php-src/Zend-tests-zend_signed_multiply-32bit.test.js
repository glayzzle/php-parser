// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/zend_signed_multiply-32bit.phpt
  it("Zend signed multiply 32-bit", function () {
    expect(parser.parseCode("<?php\nvar_dump(0x8000 * -0xffff);\nvar_dump(0x8001 * 0xfffe);\nvar_dump(0x8001 * -0xffff);\n?>")).toMatchSnapshot();
  });
});
