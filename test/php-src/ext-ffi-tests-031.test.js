// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/031.phpt
  it("FFI 031: bit-fields packing", function () {
    expect(parser.parseCode("<?php\nfunction test_size($expected_size, $type) {\n    try {\n        $size = FFI::sizeof(FFI::new($type));\n        if ($size !== $expected_size) {\n            echo \"FAIL: sizeof($type) != $expected_size ($size)\\n\";\n        }\n    } catch (Throwable $e) {\n        echo $type . \"=>\" . get_class($e) . \": \" . $e->getMessage().\"\\n\";\n    }\n}\ntest_size( 4, \"struct {int a:2; int b:2;}\");\ntest_size( 1, \"struct __attribute__((packed)) {int a:2; int b:2;}\");\ntest_size( 8, \"struct {int a:2; unsigned long long :60; int b:2;}\");\ntest_size( 9, \"struct __attribute__((packed)) {int a:2; unsigned long long :64; int b:2;}\");\ntest_size( 4, \"union {int a:2; int b:8;}\");\ntest_size( 1, \"union __attribute__((packed)) {int a:2; int b:8;}\");\n?>\nok")).toMatchSnapshot();
  });
});
