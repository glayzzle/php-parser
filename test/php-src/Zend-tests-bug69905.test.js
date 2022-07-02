// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69905.phpt
  it("Bug #69905 (null ptr deref and segfault in ZEND_FETCH_DIM_RW_SPEC_VAR_UNUSED_HANDLER)", function () {
    expect(parser.parseCode("<?php\nmd5(0)[]--;\n?>")).toMatchSnapshot();
  });
});
