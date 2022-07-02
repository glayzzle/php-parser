// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reduce_return_by_ref.phpt
  it("Return by reference from array_reduce() callback", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2];\nvar_dump(array_reduce($array, function &($a, $b) {\n    return $b;\n}, 0));\n?>")).toMatchSnapshot();
  });
});
