// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_bug72017.phpt
  it("Bug #72017 (incorrect truncation due to floating point precision issue)", function () {
    expect(parser.parseCode("<?php\nvar_dump(range(4.5, 4.2, 0.1));\n?>")).toMatchSnapshot();
  });
});
