// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug75433.phpt
  it("array_values() preserves next index from source array when shallow-copying", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3];\nunset($a[2]);\n$b = array_values($a);\n$b[] = 4;\nprint_r($b);\n?>")).toMatchSnapshot();
  });
});
