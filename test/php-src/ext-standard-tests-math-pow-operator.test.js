// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/pow-operator.phpt
  it("Various pow() tests", function () {
    expect(parser.parseCode("<?php\n$x = 2;\n$x **= 3;\nvar_dump( -3 ** 2 === -9);\nvar_dump( (-3) **2 === 9);\nvar_dump( 2 ** 3 ** 2 === 512);\nvar_dump( (2 ** 3) ** 2 === 64);\nvar_dump( $x === 8);\n?>")).toMatchSnapshot();
  });
});
