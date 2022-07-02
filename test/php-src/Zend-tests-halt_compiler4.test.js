// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt_compiler4.phpt
  it("__HALT_COMPILER(); bad define() of __COMPILER_HALT_OFFSET__ 2", function () {
    expect(parser.parseCode("<?php\ndefine ('__COMPILER_HALT_OFFSET__', 1);\n__HALT_COMPILER();\n?>\n==DONE==")).toMatchSnapshot();
  });
});
