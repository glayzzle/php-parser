// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70253.phpt
  it("Bug #70253 (segfault at _efree () in zend_alloc.c:1389)", function () {
    expect(parser.parseCode("<?php\nunserialize('a:2:{i:0;O:9:\"000000000\":10000000');\n?>")).toMatchSnapshot();
  });
});
