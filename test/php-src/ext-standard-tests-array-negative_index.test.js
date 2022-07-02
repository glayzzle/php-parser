// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/negative_index.phpt
  it("Test arrays starting with negative indices", function () {
    expect(parser.parseCode("<?php\n$a = array_fill(-2, 3, true);\n$b = [-2 => true, true, true];\n$c = [\"string\" => true, -2 => true, true, true];\nunset($c[\"string\"]);\n$d[-2] = true;\n$d[] = true;\n$d[] = true;\n$e = [-2 => false];\narray_pop($e);\n$e[] = true;\n$e[] = true;\n$e[] = true;\nvar_dump($a === $b && $b === $c && $c === $d && $d == $e);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
