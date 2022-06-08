// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_perfect_power.phpt
  it("gmp_perfect_power(): Check if number is a perfect power", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_perfect_power(0));\nvar_dump(gmp_perfect_power(1));\nvar_dump(gmp_perfect_power(2));\nvar_dump(gmp_perfect_power(4));\nvar_dump(gmp_perfect_power(6));\nvar_dump(gmp_perfect_power(8));\necho \"\\n\";\nvar_dump(gmp_perfect_power(-1));\nvar_dump(gmp_perfect_power(-2));\nvar_dump(gmp_perfect_power(-4));\nvar_dump(gmp_perfect_power(-6));\nvar_dump(gmp_perfect_power(-8));\necho \"\\n\";\n$n = gmp_init(\"7442665456261594668083173595997\");\nvar_dump(gmp_perfect_power($n));\nvar_dump(gmp_perfect_power($n+1));\n?>")).toMatchSnapshot();
  });
});
