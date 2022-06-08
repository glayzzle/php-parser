// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug50175.phpt
  it("Bug #50175: gmp_init() results 0 on given base and number starting with 0x or 0b", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_init('0bcd', 16));\nvar_dump(gmp_init('0xyz', 36));\n?>")).toMatchSnapshot();
  });
});
