// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/intdiv_64bit.phpt
  it("intdiv functionality", function () {
    expect(parser.parseCode("<?php\n// (int)(PHP_INT_MAX / 3) gives a different result\nvar_dump(intdiv(PHP_INT_MAX, 3));\n?>")).toMatchSnapshot();
  });
});
