// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpowmod.phpt
  it("bcpowmod() - Raise an arbitrary precision number to another, reduced by a specified modulus", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcpowmod(\"5\", \"2\", \"7\"));\nvar_dump(bcpowmod(\"-2\", \"5\", \"7\"));\nvar_dump(bcpowmod(\"10\", \"2147483648\", \"2047\"));\nvar_dump(bcpowmod(\"10\", \"0\", \"2047\"));\n?>")).toMatchSnapshot();
  });
});
