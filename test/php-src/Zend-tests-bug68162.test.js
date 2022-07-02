// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68162.phpt
  it("Bug #68162: isset($$varname) always true", function () {
    expect(parser.parseCode("<?php\n$name = 'var';\nvar_dump(isset($$name));\n$var = 42;\nvar_dump(isset($$name));\n?>")).toMatchSnapshot();
  });
});
