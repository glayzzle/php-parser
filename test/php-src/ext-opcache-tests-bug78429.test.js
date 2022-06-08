// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78429.phpt
  it("Bug #78429 (opcache_compile_file(__FILE__); segfaults)", function () {
    expect(parser.parseCode("<?php\nvar_dump(opcache_compile_file(__FILE__));\n?>")).toMatchSnapshot();
  });
});
