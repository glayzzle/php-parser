// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74546.phpt
  it("Bug #74546 (SIGILL in ZEND_FETCH_CLASS_CONSTANT_SPEC_CONST_CONST_HANDLER())", function () {
    expect(parser.parseCode("<?php\n\"000000\"[0]::d;\n?>")).toMatchSnapshot();
  });
});
