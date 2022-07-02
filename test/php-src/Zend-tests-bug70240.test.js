// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70240.phpt
  it("Bug #70240 (Segfault when doing unset($var()))", function () {
    expect(parser.parseCode("<?php\nunset($var());\n?>")).toMatchSnapshot();
  });
});
