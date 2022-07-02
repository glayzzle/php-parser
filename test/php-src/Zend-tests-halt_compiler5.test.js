// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt_compiler5.phpt
  it("Using __COMPILER_HALF_OFFSET__ with trailing {} (OSS-Fuzz #17895)", function () {
    expect(parser.parseCode("<?php\n__COMPILER_HALT_OFFSET__;\n{}\n?>")).toMatchSnapshot();
  });
});
