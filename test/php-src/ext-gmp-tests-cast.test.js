// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/cast.phpt
  it("GMP casting using casting operators", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(42);\necho $n, \"\\n\";\nvar_dump((string) $n);\nvar_dump((int) $n);\nvar_dump((float) $n);\nvar_dump((bool) $n);\n?>")).toMatchSnapshot();
  });
});
