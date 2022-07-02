// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46196.phpt
  it("Test restore_error_handler() function : bug #46196", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing restore_error_handler() : error bug #46196 ***\\n\";\nvar_dump( set_error_handler( 'myErrorHandler' ) );\nvar_dump( restore_error_handler() );\nvar_dump( set_error_handler( 'myErrorHandler' ) );\nfunction myErrorHandler($errno, $errstr, $errfile, $errline)\n{\n    return true;\n}\n?>")).toMatchSnapshot();
  });
});
