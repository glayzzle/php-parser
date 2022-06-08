// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_gcd.phpt
  it("gmp_gcd() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_gcd(234,12387)));\nvar_dump(gmp_strval(gmp_gcd(0,12387)));\nvar_dump(gmp_strval(gmp_gcd(224,0)));\nvar_dump(gmp_strval(gmp_gcd(-1,0)));\nvar_dump(gmp_strval(gmp_gcd(-1,0)));\nvar_dump(gmp_strval(gmp_gcd(\"12371238123\",\"32618723123\")));\nvar_dump(gmp_strval(gmp_gcd(\"7623456735\",\"12372341234\")));\n$n = gmp_init(\"8127346234\");\nvar_dump(gmp_strval(gmp_gcd($n,\"12372341234\")));\n$n = gmp_init(\"8127346234\");\nvar_dump(gmp_strval(gmp_gcd(\"7623456735\",$n)));\n$n = gmp_init(\"8127346234\");\nvar_dump(gmp_strval(gmp_gcd($n,$n)));\n$n = gmp_init(\"8127346234\");\nvar_dump(gmp_strval(gmp_gcd($n,0)));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
