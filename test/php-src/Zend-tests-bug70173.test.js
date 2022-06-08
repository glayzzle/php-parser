// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70173.phpt
  it("Bug #70173 (ZVAL_COPY_VALUE_EX broken for 32bit Solaris Sparc)", function () {
    expect(parser.parseCode("<?php\n$var = 2900000000;\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
