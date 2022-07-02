// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/internal.phpt
  it("Argument unpacking with internal functions", function () {
    expect(parser.parseCode("<?php\n$arrays = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9],\n];\nvar_dump(array_map(null, ...$arrays));\n?>")).toMatchSnapshot();
  });
});
