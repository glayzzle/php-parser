// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48930.phpt
  it("Bug #48930 (__COMPILER_HALT_OFFSET__ incorrect in PHP>=5.3)", function () {
    expect(parser.parseCode("#!php\n<?php\n/*\n * Test\n */\nprintf(\"__COMPILER_HALT_OFFSET__ is %d\\n\",__COMPILER_HALT_OFFSET__);\n__halt_compiler();\n?>")).toMatchSnapshot();
  });
});
