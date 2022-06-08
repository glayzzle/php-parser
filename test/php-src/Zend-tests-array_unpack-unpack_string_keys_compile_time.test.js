// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/unpack_string_keys_compile_time.phpt
  it("Unpacking of string keys is supported at compile-time", function () {
    expect(parser.parseCode("<?php\nvar_dump([...['a' => 'b']]);\nvar_dump(['a' => 'X', ...['a' => 'b']]);\nvar_dump([...['a' => 'b'], 'a' => 'X']);\n?>")).toMatchSnapshot();
  });
});
