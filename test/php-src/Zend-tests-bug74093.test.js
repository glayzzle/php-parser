// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74093.phpt
  it("Bug #74093 (Maximum execution time of n+2 seconds exceed not written in error_log)", function () {
    expect(parser.parseCode("<?php\n$a1 = range(1, 2000000);\n$a2 = range(100000, 2999999);\narray_intersect($a1, $a2);\n?>")).toMatchSnapshot();
  });
});
