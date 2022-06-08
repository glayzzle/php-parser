// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/round_modes.phpt
  it("round() with different rounding modes", function () {
    expect(parser.parseCode("<?php\nvar_dump (round (2.5, 0, PHP_ROUND_HALF_UP));\nvar_dump (round (2.5, 0, PHP_ROUND_HALF_DOWN));\nvar_dump (round (2.5, 0, PHP_ROUND_HALF_EVEN));\nvar_dump (round (2.5, 0, PHP_ROUND_HALF_ODD));\nvar_dump (round (-2.5, 0, PHP_ROUND_HALF_UP));\nvar_dump (round (-2.5, 0, PHP_ROUND_HALF_DOWN));\nvar_dump (round (-2.5, 0, PHP_ROUND_HALF_EVEN));\nvar_dump (round (-2.5, 0, PHP_ROUND_HALF_ODD));\nvar_dump (round (3.5, 0, PHP_ROUND_HALF_UP));\nvar_dump (round (3.5, 0, PHP_ROUND_HALF_DOWN));\nvar_dump (round (3.5, 0, PHP_ROUND_HALF_EVEN));\nvar_dump (round (3.5, 0, PHP_ROUND_HALF_ODD));\nvar_dump (round (-3.5, 0, PHP_ROUND_HALF_UP));\nvar_dump (round (-3.5, 0, PHP_ROUND_HALF_DOWN));\nvar_dump (round (-3.5, 0, PHP_ROUND_HALF_EVEN));\nvar_dump (round (-3.5, 0, PHP_ROUND_HALF_ODD));\n?>")).toMatchSnapshot();
  });
});
