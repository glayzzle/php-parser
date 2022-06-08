// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug44995.phpt
  it("Bug #44995 (bcpowmod() fails if scale != 0)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcpowmod('4', '4', '3', 1));\nvar_dump(bcpowmod('3234', '32345', '22345', 1));\n?>")).toMatchSnapshot();
  });
});
