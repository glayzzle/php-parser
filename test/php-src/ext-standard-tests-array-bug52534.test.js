// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug52534.phpt
  it("Bug #52534 (var_export array with negative key)", function () {
    expect(parser.parseCode("<?php\n$aArray = array ( -1 => 'Hello');\nvar_export($aArray);\n?>")).toMatchSnapshot();
  });
});
