// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53305.phpt
  it("Bug #53305 (E_NOTICE when defining a constant starts with __COMPILER_HALT_OFFSET__)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ndefine('__COMPILER_HALT_OFFSET__1', 1);\ndefine('__COMPILER_HALT_OFFSET__2', 2);\ndefine('__COMPILER_HALT_OFFSET__', 3);\ndefine('__COMPILER_HALT_OFFSET__1'.chr(0), 4);\nvar_dump(__COMPILER_HALT_OFFSET__1);\nvar_dump(constant('__COMPILER_HALT_OFFSET__1'.chr(0)));\n?>")).toMatchSnapshot();
  });
});
