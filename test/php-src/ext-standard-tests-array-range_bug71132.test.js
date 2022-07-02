// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_bug71132.phpt
  it("Bug #71132 (range function produces 2 segfaults with long integers)", function () {
    expect(parser.parseCode("<?php\nvar_dump(count(range(PHP_INT_MIN + 513, PHP_INT_MIN)));\nvar_dump(count(range(PHP_INT_MIN, PHP_INT_MIN + 513)));\n?>")).toMatchSnapshot();
  });
});
