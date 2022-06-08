// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcsqrt_variation001.phpt
  it("bcsqrt() with argument of 0", function () {
    expect(parser.parseCode("<?php\necho bcsqrt(\"0\");\n?>")).toMatchSnapshot();
  });
});
