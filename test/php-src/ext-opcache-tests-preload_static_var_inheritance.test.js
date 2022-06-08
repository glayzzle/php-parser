// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_static_var_inheritance.phpt
  it("Bug #79548: Preloading segfault with inherited method using static variable", function () {
    expect(parser.parseCode("<?php\nvar_dump((new B)->test());\n?>")).toMatchSnapshot();
  });
});
