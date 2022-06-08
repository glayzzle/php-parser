// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/gh8433.phpt
  it("GH-8433 (Assigning function pointers to structs in FFI leaks memory)", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(\"typedef struct { int a; } bar;\");\n$x = $ffi->new(\"bar(*)(void)\");\nFFI::addr($x)[0] = function() use ($ffi) {\n    $bar = $ffi->new(\"bar\");\n    $bar->a = 2;\n    return $bar;\n};\nvar_dump($x());\n?>")).toMatchSnapshot();
  });
});
