// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/negative_zero_check.phpt
  it("Negative 0 check", function () {
    expect(parser.parseCode("<?php\n$negativeZero = -0.0;\nvar_dump($negativeZero);\nvar_dump($negativeZero === (float)(int)$negativeZero);\nvar_dump($negativeZero === 0.0);\n?>")).toMatchSnapshot();
  });
});
