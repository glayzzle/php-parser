// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace.phpt
  it("preg_replace()", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace('{{\\D+}}', 'x', '{abcd}'));\nvar_dump(preg_replace('{{\\D+}}', 'ddd', 'abcd'));\nvar_dump(preg_replace('/(ab)(c)(d)(e)(f)(g)(h)(i)(j)(k)/', 'a${1}2$103', 'zabcdefghijkl'));\n?>")).toMatchSnapshot();
  });
});
