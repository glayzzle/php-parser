// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/040.phpt
  it("FFI 040: Support for scalar types", function () {
    expect(parser.parseCode("<?php\n$x = FFI::new(\"int\");\n$x->cdata = 5;\nvar_dump($x);\nvar_dump(FFI::typeof($x));\nvar_dump(FFI::cast(\"int8_t[4]\", $x));\n$p = FFI::addr($x);\nvar_dump($p);\n$p[0] += 2;\nvar_dump($x);\nvar_dump(FFI::sizeof($x));\nvar_dump(FFI::alignof($x));\nFFI::memset($x, ord(\"a\"), 4);\nvar_dump(FFI::string($x, 4));\necho \"\\n\";\n$y = FFI::new(\"int[2]\");\n$y[0] = 6;\nvar_dump($y[0]);\nvar_dump(FFI::typeof($y[0]));\nvar_dump(FFI::cast(\"int8_t[4]\", $y[0]));\n$p = FFI::addr($y[0]);\nvar_dump($p);\n$p[0] += 2;\nvar_dump($y[0]);\nvar_dump(FFI::sizeof($y[0]));\nvar_dump(FFI::alignof($y[0]));\nFFI::memset($y[0], ord(\"b\"), 4);\nvar_dump(FFI::string($y[0], 4));\necho \"\\n\";\nvar_dump(FFI::memcmp($x, $y[0], 4));\nFFI::memcpy($x, $y[0], 4);\nvar_dump(FFI::memcmp($x, $y[0], 4));\n?>")).toMatchSnapshot();
  });
});
