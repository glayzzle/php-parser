// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_lcm.phpt
  it("gmp_lcm(): Least common multiple", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_lcm(100, 77));\nvar_dump(gmp_lcm(99, 77));\nvar_dump(gmp_lcm(99, -77));\nvar_dump(gmp_lcm(-99, -77));\nvar_dump(gmp_lcm(gmp_init(99), gmp_init(77)));\nvar_dump(gmp_lcm(93, 0));\nvar_dump(gmp_lcm(0, 93));\n?>")).toMatchSnapshot();
  });
});
