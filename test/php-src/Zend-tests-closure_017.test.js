// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_017.phpt
  it("Closure 017: Trying to destroy an active lambda function", function () {
    expect(parser.parseCode("<?php\n$a = function(&$a) { $a = 1; };\n$a($a);\n?>\nDONE")).toMatchSnapshot();
  });
});
