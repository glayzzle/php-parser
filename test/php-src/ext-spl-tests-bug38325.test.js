// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug38325.phpt
  it("Bug #38325 (spl_autoload_register() gaves wrong line for \"class not found\")", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register();\nnew ThisClassDoesNotExistEverFoo();\n?>")).toMatchSnapshot();
  });
});
