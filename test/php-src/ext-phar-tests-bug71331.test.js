// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71331.phpt
  it("Bug #71331 (Uninitialized pointer in phar_make_dirstream())", function () {
    expect(parser.parseCode("<?php\n$p = new PharData(__DIR__.\"/bug71331.tar\");\n?>\nDONE")).toMatchSnapshot();
  });
});
