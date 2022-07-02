// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70782.phpt
  it("Bug #70782: null ptr deref and segfault (zend_get_class_fetch_type)", function () {
    expect(parser.parseCode("<?php\n(-0)::$prop;\n?>")).toMatchSnapshot();
  });
});
