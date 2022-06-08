// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/039.phpt
  it("FFI 039: Pointer arithmetic", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[10]\");\nfor ($i = 0; $i < 10; $i++) {\n    $a[$i] = $i;\n}\n$p = $a + 0;\nvar_dump($p[0]);\n$p += 7;\nvar_dump($p[0]);\n$q = $p - 3;\nvar_dump($q[0]);\n$q = 1 + $q;\n$p++;\nvar_dump($p, $q);\nvar_dump($p - $q);\nvar_dump($q - $p);\nvar_dump($q - $a);\n?>")).toMatchSnapshot();
  });
});
