// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug67917.phpt
  it("Bug #67917: Using GMP objects with overloaded operators can cause memory exhaustion", function () {
    expect(parser.parseCode("<?php\n$mem1 = memory_get_usage();\nfor ($i = 0; $i < 1000; $i++) {\n    $gmp = gmp_init(42);\n    $gmp <<= 1;\n}\n$mem2 = memory_get_usage();\nvar_dump($mem2 - $mem1 < 100000);\n?>")).toMatchSnapshot();
  });
});
