// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_007.phpt
  it("JIT MUL: 007 incorrect optimization", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    1.5%2%2%2/2%2;\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
