// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bool_not_002.phpt
  it("JIT BOOL_NOT: 002 Incorrect function JIT for MAY_BE_DOUBLE|MAY_BE_UNDEF", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$j = 2;\n    for ($i = 0; $i < 10;\n    \t$a = !$i + $c[0] = 0xfff0001/34028236692903846346336*6) {\n\t    $a =!$a + $a &= 74444444 - 444 >> 4 - $j++;\n        if ($j > 14) break;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
