// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug.66364.phpt
  it("Bug #66364 (BCMath bcmul ignores scale parameter)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcmul('0.3', '0.2', 4));\n?>")).toMatchSnapshot();
  });
});
