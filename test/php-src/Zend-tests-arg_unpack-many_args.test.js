// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/many_args.phpt
  it("Argument unpacking with many arguments", function () {
    expect(parser.parseCode("<?php\nfunction f(...$args) {\n    var_dump(count($args));\n}\n$array = array_fill(0, 10000, 42);\nf(...$array, ...$array);\n?>")).toMatchSnapshot();
  });
});
