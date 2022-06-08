// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_kronecker.phpt
  it("gmp_kronecker(): Kronecker symbol", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_kronecker(23, 12));\nvar_dump(gmp_kronecker(gmp_init(23), 12));\nvar_dump(gmp_kronecker(23, gmp_init(12)));\nvar_dump(gmp_kronecker(gmp_init(23), gmp_init(12)));\nvar_dump(gmp_kronecker(\"23\", 12));\nvar_dump(gmp_kronecker(23, \"12\"));\nvar_dump(gmp_kronecker(\"23\", \"12\"));\necho \"\\n\";\nvar_dump(gmp_kronecker(23, -12));\nvar_dump(gmp_kronecker(-23, 12));\nvar_dump(gmp_kronecker(-23, -12));\n?>")).toMatchSnapshot();
  });
});
