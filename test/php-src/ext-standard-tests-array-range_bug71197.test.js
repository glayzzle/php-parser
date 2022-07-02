// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_bug71197.phpt
  it("Bug #71197 (range function produces another 2 segfaults with long integers)", function () {
    expect(parser.parseCode("<?php\nrange(PHP_INT_MIN, PHP_INT_MIN + 513, .01);\nrange(PHP_INT_MIN + 513, PHP_INT_MIN, .01);\n?>")).toMatchSnapshot();
  });
});
