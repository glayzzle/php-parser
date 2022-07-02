// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/008.phpt
  it("var_dump float test", function () {
    expect(parser.parseCode("<?php\n// this checks f,g,G conversion for snprintf/spprintf\nvar_dump(array(ini_get('precision'),.012,-.012,.12,-.12,1.2,-1.2,12.,-12.,0.000123,.0000123,123456789012.0,1234567890123.0,12345678901234567890.0));\n?>")).toMatchSnapshot();
  });
});
