// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70183.phpt
  it("Bug #70183 (null pointer deref (segfault) in zend_eval_const_expr)", function () {
    expect(parser.parseCode("<?php\n[[][]]\n?>")).toMatchSnapshot();
  });
});
