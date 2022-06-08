// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/const_deprecation.phpt
  it("Internal constant deprecation", function () {
    expect(parser.parseCode("<?php\nvar_dump(ZEND_TEST_DEPRECATED);\nvar_dump(constant('ZEND_TEST_DEPRECATED'));\nconst X = ZEND_TEST_DEPRECATED;\nvar_dump(X);\n?>")).toMatchSnapshot();
  });
});
