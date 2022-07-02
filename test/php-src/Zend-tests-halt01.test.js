// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt01.phpt
  it("__HALT_COMPILER() basic test", function () {
    expect(parser.parseCode("<?php\nprint \"yo!\\n\";\n__HALT_COMPILER();\nnone of this should be displayed!\n?>")).toMatchSnapshot();
  });
});
