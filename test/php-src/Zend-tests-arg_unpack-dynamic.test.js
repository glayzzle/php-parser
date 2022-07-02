// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/dynamic.phpt
  it("Unpack arguments for dynamic call", function () {
    expect(parser.parseCode("<?php\n$fn = function(...$args) {\n    var_dump($args);\n};\n$fn(...[]);\n$fn(...[1, 2, 3]);\n$fn(1, ...[2, 3], ...[], ...[4, 5]);\n?>")).toMatchSnapshot();
  });
});
