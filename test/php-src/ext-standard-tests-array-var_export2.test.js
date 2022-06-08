// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/var_export2.phpt
  it("var_export() and empty array keys", function () {
    expect(parser.parseCode("<?php\n$a = array (\"\\0\" => 'null', \"\" => 'empty', \"0\" => 'nul');\nvar_export($a);\n?>")).toMatchSnapshot();
  });
});
