// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcscale_variation002.phpt
  it("bcadd() incorrect argument count", function () {
    expect(parser.parseCode("<?php\necho bcadd(\"-4.27\", \"7.3\");\n?>")).toMatchSnapshot();
  });
});
