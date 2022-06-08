// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/packed_001.phpt
  it("array_keys() and array_values() w/ packed optimization", function () {
    expect(parser.parseCode("<?php\n$x = [1,2,3];\nunset($x[1]);\n$inputs = [\n  [],\n  [1,2,3],\n  [0=>1, 1=>2, 2=>3],\n  [1=>1, 2=>2, 3=>3],\n  [0=>1, 2=>3],\n  $x,\n];\nforeach ($inputs as $input) {\n  print_r(array_keys($input));\n  print_r(array_values($input));\n}\n?>")).toMatchSnapshot();
  });
});
