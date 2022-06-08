// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/array_elem_002.phpt
  it("Occupied next element", function () {
    expect(parser.parseCode("<?php\n$float = 100000000000000000000000000000000000000;\n$string_float= PHP_INT_MAX;\n$a = [$float => 'a', $string_float => 'b', 'c', 'd'];\n?>")).toMatchSnapshot();
  });
});
