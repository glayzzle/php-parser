// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_error3.phpt
  it("Test var_export() function : error conditions - recursive array", function () {
    expect(parser.parseCode("<?php\n$a[] =& $a;\nvar_export($a, true);\n?>")).toMatchSnapshot();
  });
});
