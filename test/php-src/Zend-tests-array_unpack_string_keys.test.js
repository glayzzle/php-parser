// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack_string_keys.phpt
  it("Using array unpacking in an array literal that also has string keys (OSS-Fuzz #17965)", function () {
    expect(parser.parseCode("<?php\n$y = [1, 2, 3];\n$z = \"bar\";\n$x = [...$y, \"foo\" => $z];\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
