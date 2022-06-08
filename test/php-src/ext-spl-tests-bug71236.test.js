// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71236.phpt
  it("Bug #71236: Second call of spl_autoload_register() does nothing if it has no arguments", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {});\nspl_autoload_register();\nvar_dump(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
