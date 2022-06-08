// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug48493.phpt
  it("SPL: Bug #48493 spl_autoload_unregister() can't handle prepended functions", function () {
    expect(parser.parseCode("<?php\nfunction autoload1() {}\nfunction autoload2() {}\nspl_autoload_register('autoload2');\nspl_autoload_register('autoload1', true, true);\nvar_dump(spl_autoload_functions());\nspl_autoload_unregister('autoload2');\nvar_dump(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
