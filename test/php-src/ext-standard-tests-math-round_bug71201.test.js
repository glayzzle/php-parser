// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/round_bug71201.phpt
  it("Bug #71201 round() segfault on 64-bit builds", function () {
    expect(parser.parseCode("<?php\necho round(1.0, -2147483648), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
