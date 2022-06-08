// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70430.phpt
  it("Bug #70430: Stack buffer overflow in zend_language_parser()", function () {
    expect(() => parser.parseCode("<?php\n$\"*** Testing function() :  ***\\n\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
