// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69755.phpt
  it("Bug #69755: segfault in ZEND_CONCAT_SPEC_TMPVAR_CONST_HANDLER", function () {
    expect(parser.parseCode("<?php\nc . 10;\n?>")).toMatchSnapshot();
  });
});
