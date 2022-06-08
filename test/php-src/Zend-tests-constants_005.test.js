// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_005.phpt
  it("Persistent case insensitive and user defined constants", function () {
    expect(parser.parseCode("<?php\nvar_dump(defined('ZEND_THREAD_safe'));\ndefine(\"ZEND_THREAD_safe\", 123);\nvar_dump(ZEND_THREAD_safe);\n?>")).toMatchSnapshot();
  });
});
