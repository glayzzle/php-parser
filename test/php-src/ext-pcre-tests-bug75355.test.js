// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug75355.phpt
  it("Bug #75355 (preg_quote() does not quote # control character)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_quote('#'));\nvar_dump(preg_match('~^(' . preg_quote('hello#world', '~') . ')\\z~x', 'hello#world', $m));\nvar_dump($m[1]);\n?>")).toMatchSnapshot();
  });
});
