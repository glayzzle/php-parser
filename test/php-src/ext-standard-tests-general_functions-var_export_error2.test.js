// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_error2.phpt
  it("Test var_export() function : error conditions - recursive object", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->p =& $obj;\nvar_export($obj, true);\n?>")).toMatchSnapshot();
  });
});
