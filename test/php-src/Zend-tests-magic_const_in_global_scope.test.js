// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_const_in_global_scope.phpt
  it("Test use of magic constants in the global scope", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    __LINE__,\n    __FILE__,\n    __DIR__,\n    __FUNCTION__,\n    __METHOD__,\n    __CLASS__,\n    __TRAIT__,\n    __NAMESPACE__\n);\n?>")).toMatchSnapshot();
  });
});
