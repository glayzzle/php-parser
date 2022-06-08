// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_init_integer_notations.phpt
  it("gmp_init() with various integer notations", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_init(\"0x16\"));\nvar_dump(gmp_init(\"0X16\"));\nvar_dump(gmp_init(\"0o16\"));\nvar_dump(gmp_init(\"0o16\"));\nvar_dump(gmp_init(\"016\"));\nvar_dump(gmp_init(\"016\"));\nvar_dump(gmp_init(\"0b11\"));\nvar_dump(gmp_init(\"0b11\"));\n?>")).toMatchSnapshot();
  });
});
