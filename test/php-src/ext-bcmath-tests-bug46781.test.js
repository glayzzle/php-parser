// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug46781.phpt
  it("Bug #46781 (BC math handles minus zero incorrectly)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcadd('-0.0', '-0.0', 1));\nvar_dump(bccomp('-0.0', '0', 1));\n?>")).toMatchSnapshot();
  });
});
