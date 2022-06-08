// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/gh7867.phpt
  it("GH-7867 (FFI::cast() from pointer to array is broken)", function () {
    expect(parser.parseCode("<?php\n$value = FFI::new('char[26]');\nFFI::memcpy($value, implode('', range('a', 'z')), 26);\n$slice = FFI::new('char[4]');\necho 'cast from start' . PHP_EOL;\nFFI::memcpy($slice, $value, 4);\nvar_dump($value + 0, $slice, FFI::cast('char[4]', $value));\necho PHP_EOL;\necho 'cast with offset' . PHP_EOL;\nFFI::memcpy($slice, $value + 4, 4);\nvar_dump($value + 4, $slice, FFI::cast('char[4]', $value + 4));\necho PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
