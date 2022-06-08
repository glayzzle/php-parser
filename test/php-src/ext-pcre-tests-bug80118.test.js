// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug80118.phpt
  it("Bug #80118 (Erroneous whitespace match with JIT only)", function () {
    expect(parser.parseCode("<?php\npreg_match('~[^\\p{Han}\\p{Z}]~u', '     ', $matches);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
