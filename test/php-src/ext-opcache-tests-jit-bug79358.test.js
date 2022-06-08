// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug79358.phpt
  it("Bug #79358: JIT miscompile in composer", function () {
    expect(parser.parseCode("<?php\nfunction test(int $x) {\n    return ($x > 0xdead && unimportant()) ||\n           ($x < 0xbeef && unimportant());\n}\nvar_dump(test(0xcccc));\n?>")).toMatchSnapshot();
  });
});
