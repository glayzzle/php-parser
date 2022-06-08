// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_012.phpt
  it("JIT ASSIGN_DIM: 012", function () {
    expect(parser.parseCode("<?php\nfunction test($key) {\n    $ao = new ArrayObject();\n    $ao[$key] = 1 < $ao['321'] = 2;\n}\ntest('0');\n?>\nDONE")).toMatchSnapshot();
  });
});
