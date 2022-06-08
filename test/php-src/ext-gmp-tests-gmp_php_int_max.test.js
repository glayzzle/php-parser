// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_php_int_max.phpt
  it("PHP_INT_MAX tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_mul(PHP_INT_MAX, PHP_INT_MAX));\nvar_dump(gmp_add(PHP_INT_MAX, PHP_INT_MAX));\nvar_dump(gmp_mul(PHP_INT_MAX, PHP_INT_MIN));\n?>\nDONE")).toMatchSnapshot();
  });
});
