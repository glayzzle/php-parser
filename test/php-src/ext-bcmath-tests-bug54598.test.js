// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug54598.phpt
  it("Bug #54598 (bcpowmod() may return 1 if modulus is 1)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcpowmod(5, 0, 1));\nvar_dump(bcpowmod(5, 0, 1, 3));\n?>")).toMatchSnapshot();
  });
});
