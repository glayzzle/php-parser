// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug79393.phpt
  it("Bug #79393 (Null coalescing operator failing with SplFixedArray)", function () {
    expect(parser.parseCode("<?php\n$foo = new SplFixedArray(5);\n$foo[0] = 'bar1';\n$foo[1] = 'bar2';\n$foo[2] = 0;\n$foo[3] = false;\n$foo[4] = '';\nvar_dump($foo[0] ?? null);\nvar_dump($foo[1] ?? null);\nvar_dump($foo[2] ?? null);\nvar_dump($foo[3] ?? null);\nvar_dump($foo[4] ?? null);\nvar_dump($foo[5] ?? null);\n?>")).toMatchSnapshot();
  });
});
