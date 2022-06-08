// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_009.phpt
  it("JIT MUL: 009 memory leak", function () {
    expect(parser.parseCode("<?php\n$x[\"\"][] = 1;\n$x[~\"$y\"] *= 1;\n?>")).toMatchSnapshot();
  });
});
