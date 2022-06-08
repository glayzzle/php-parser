// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73916.phpt
  it("Bug #73916 (zend_print_flat_zval_r doesn't consider reference)", function () {
    expect(parser.parseCode("<?php\n$a = array('a');\nclass b{};\n$b = new b;\n$test[] =& $a;\n$test[] =& $b;\ntest($test);\nfunction test() {\n    debug_print_backtrace();\n}\n?>")).toMatchSnapshot();
  });
});
