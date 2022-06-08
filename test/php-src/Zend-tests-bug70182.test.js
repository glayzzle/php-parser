// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70182.phpt
  it("Bug #70182 ($string[] assignment with +=)", function () {
    expect(parser.parseCode("<?php\n$str = \"abc\";\n$str[] += $str;\n?>")).toMatchSnapshot();
  });
});
