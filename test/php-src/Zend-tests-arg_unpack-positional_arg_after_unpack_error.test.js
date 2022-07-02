// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/positional_arg_after_unpack_error.phpt
  it("Positional arguments cannot be used after argument unpacking", function () {
    expect(parser.parseCode("<?php\nvar_dump(...[1, 2, 3], 4);\n?>")).toMatchSnapshot();
  });
});
