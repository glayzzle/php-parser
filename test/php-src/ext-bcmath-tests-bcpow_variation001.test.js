// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpow_variation001.phpt
  it("bcpow() with a negative exponent", function () {
    expect(parser.parseCode("<?php\necho bcpow(\"2\", \"-4\");\n?>")).toMatchSnapshot();
  });
});
