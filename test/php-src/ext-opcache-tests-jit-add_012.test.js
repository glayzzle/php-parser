// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_012.phpt
  it("JIT ADD: 012 register allocation for 64-bit constant", function () {
    expect(parser.parseCode("<?php\n$x = 0;\n$y = [0]; \n$y[$x]++;\n$y[$x] += 4467793343;\n?>\nDONE")).toMatchSnapshot();
  });
});
