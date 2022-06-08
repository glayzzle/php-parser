// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_positional_after_named.phpt
  it("Positional argument after named argument in new arguments", function () {
    expect(parser.parseCode("<?php\nstatic $x = new stdClass(x: 0, 1);\n?>")).toMatchSnapshot();
  });
});
