// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71204.phpt
  it("Bug #71204 (segfault if clean spl_autoload_funcs while autoloading )", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    spl_autoload_unregister(\"spl_autoload_call\");\n});\nspl_autoload_register(function ($name) {\n});\nnew A();\n?>")).toMatchSnapshot();
  });
});
