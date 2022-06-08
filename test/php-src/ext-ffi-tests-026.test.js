// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/026.phpt
  it("FFI 026: Array iteration by reference", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[3]\");\n$a[1] = 10;\n$a[2] = 20;\nvar_dump($a);\nforeach ($a as &$val) {\n    $val->cdata += 5;\n}\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
