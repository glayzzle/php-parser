// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_binomial.phpt
  it("gmp_binomial(): Binomial coefficients", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_binomial(10, 5));\nvar_dump(gmp_binomial(\"10\", 5));\n$n = gmp_init(10);\nvar_dump(gmp_binomial($n, 5));\nvar_dump(gmp_binomial(10000, 100));\nvar_dump(gmp_binomial(0, 0));\nvar_dump(gmp_binomial(0, 1));\nvar_dump(gmp_binomial(1, 0));\nvar_dump(gmp_binomial(1, 1));\nvar_dump(gmp_binomial(-1, 5)); // == -(1 + 5 - 1 over 5)\nvar_dump(gmp_binomial(-2, 6)); // == (2 + 6 - 1 over 6)\ntry {\n    var_dump(gmp_binomial(5, -2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
