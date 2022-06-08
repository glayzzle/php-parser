// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug81424a.phpt
  it("Bug #81424 (PCRE2 10.35 JIT performance regression)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    preg_match('/(?P<size>\\d+)m|M/', \"4M\", $m),\n    $m\n);\n?>")).toMatchSnapshot();
  });
});
