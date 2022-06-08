// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ast/zend-pow-assign.phpt
  it("ZEND_POW_ASSIGN", function () {
    expect(parser.parseCode("<?php\nassert_options(ASSERT_WARNING);\nassert(false && ($a **= 2));\n?>")).toMatchSnapshot();
  });
});
