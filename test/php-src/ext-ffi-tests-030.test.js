// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/030.phpt
  it("FFI 030: bool type", function () {
    expect(parser.parseCode("<?php\nvar_dump(FFI::sizeof(FFI::new(\"bool[2]\")));\n$p = FFI::new(\"bool[2]\");\nvar_dump($p);\n$p[1] = true;\nvar_dump($p[0]);\nvar_dump($p[1]);\n?>")).toMatchSnapshot();
  });
});
