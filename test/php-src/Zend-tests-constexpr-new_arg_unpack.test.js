// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_arg_unpack.phpt
  it("Argument unpacking in new arguments in const expr (not yet supported)", function () {
    expect(parser.parseCode("<?php\nstatic $x = new stdClass(...[0]);\n?>")).toMatchSnapshot();
  });
});
