// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78363.phpt
  it("Bug #78363: Buffer overflow in zendparse", function () {
    expect(() => parser.parseCode("<?php\n<<<X\n%0$a\n X;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
