// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_006.phpt
  it("JIT MUL: 006 incorrect guard elimination ", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i<6; $i++) {\n    $a + -$a=&$a;\n    $a = 3*$a + 0xff000;\n    $a += $a;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
