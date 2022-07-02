// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug62112.phpt
  it("Bug #62112: number_format() is not binary safe", function () {
    expect(parser.parseCode("<?php\nvar_dump(number_format(2.5, 2, \"\\0\", \"'\"));\n?>")).toMatchSnapshot();
  });
});
