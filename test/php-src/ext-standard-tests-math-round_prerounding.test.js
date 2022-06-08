// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/round_prerounding.phpt
  it("round() prerounds results to precision", function () {
    expect(parser.parseCode("<?php\nvar_dump (round (0.285, 2, PHP_ROUND_HALF_UP));\n?>")).toMatchSnapshot();
  });
});
