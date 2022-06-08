// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug75539.phpt
  it("Bug #75539 - Recursive call errors are not reported by preg_last_error()", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/((?1)?z)/', ''));\nvar_dump(preg_last_error() === \\PREG_INTERNAL_ERROR);\n?>")).toMatchSnapshot();
  });
});
