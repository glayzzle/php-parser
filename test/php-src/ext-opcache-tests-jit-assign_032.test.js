// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_032.phpt
  it("JIT ASSIGN: 032", function () {
    expect(parser.parseCode("<?php\n$var = \"intergalactic\";\n$var1 = \"space\";\n$var2 = &$var1;\n$var = $var2;\nvar_dump($var);\nvar_dump($var1);\nvar_dump($var2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
