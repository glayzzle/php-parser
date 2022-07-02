// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/sqrt_basic.phpt
  it("Test return type and value for expected input sqrt()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$arg_0 = 9.0;\nvar_dump(sqrt($arg_0));\n?>")).toMatchSnapshot();
  });
});
