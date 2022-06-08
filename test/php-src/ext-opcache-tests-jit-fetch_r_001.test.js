// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_r_001.phpt
  it("FETCH_R: 001 result reference counter may be decremented befor use", function () {
    expect(parser.parseCode("<?php\n$x = [&$v];\n$y = 'x';\n$$y == [&$x[0]];\n?>\nDONE")).toMatchSnapshot();
  });
});
