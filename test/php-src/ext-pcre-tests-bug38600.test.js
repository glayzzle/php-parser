// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug38600.phpt
  it("Bug #38600 (infinite loop in pcre with extended class)", function () {
    expect(parser.parseCode("<?php\n$foo = 'bla bla bla';\nvar_dump(preg_match('/(?<!\\w)(0x[\\p{N}]+[lL]?|[\\p{Nd}]+(e[\\p{Nd}]*)?[lLdDfF]?)(?!\\w)/', $foo, $m));\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
