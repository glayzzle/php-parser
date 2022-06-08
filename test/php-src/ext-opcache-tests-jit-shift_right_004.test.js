// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_right_004.phpt
  it("JIT Shift Right: 004", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$j = 2;\n    for ($i = 0; $i < 10;\n    \t$i + $b = $a + $a = $a + $a = $a +\n\t\t    $a = !$a +\n\t\t\t$c[0] .= 0xfff0001/34028236692903846346336*6) {\n\t    $a =!$a + $a &= 74444444 - 444 >> 4 - $j++;\n        if ($j > 14) break;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
