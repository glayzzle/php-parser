// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug23788.phpt
  it("Bug #23788 (*_replace() clobbers referenced array elements)", function () {
    expect(parser.parseCode("<?php\n$numeric = 123;\n$bool = true;\n$foo = array(&$numeric, &$bool);\nvar_dump($foo);\nstr_replace(\"abc\", \"def\", $foo);\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
