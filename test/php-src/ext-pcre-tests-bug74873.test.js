// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug74873.phpt
  it("Bug #74873 (Minor BC break: PCRE_JIT changes output of preg_match())", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/\\S+/', 'foo bar', $matches, 0, 99999));\n?>")).toMatchSnapshot();
  });
});
