// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_hash_zero.phpt
  it("Accept hashes being equal to zero", function () {
    expect(parser.parseCode("<?php\n$hashes = [\n    \"\\x8e\\x1a\\x63\\x0f\\x61\" => 32,\n    \"\\xf7\\x17\\x7f\\x7f\\x7f\\x7f\\x7f\\x7f\\x7f\\x6b\\x03\\x6a\\x13\\x63\\x17\\x6b\\x1d\\x67\" => 64,\n];\nforeach ($hashes as $hash => $bits) {\n    var_dump($hashes[$hash], $bits);\n}\n?>")).toMatchSnapshot();
  });
});
