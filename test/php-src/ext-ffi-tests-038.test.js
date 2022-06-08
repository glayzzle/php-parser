// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/038.phpt
  it("FFI 038: Casting array to pointer", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[10]\");\nfor ($i = 0; $i < 10; $i++) {\n    $a[$i] = $i;\n}\n$p = FFI::cast(\"int*\", $a);\nvar_dump($p[0]);\nvar_dump($p[2]);\nvaR_dump($p)\n?>")).toMatchSnapshot();
  });
});
