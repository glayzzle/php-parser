// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27731.phpt
  it("Bug #27731 (error_reporing() call inside @ block does not work correctly)", function () {
    expect(parser.parseCode("<?php\n    error_reporting(E_ALL ^ E_NOTICE);\n    @error_reporting(E_WARNING);\n    var_dump(error_reporting());\n?>")).toMatchSnapshot();
  });
});
