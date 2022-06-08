// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_prec_001.phpt
  it("Double precision is used for floating point calculations", function () {
    expect(parser.parseCode("<?php\nvar_dump (0.002877 == 2877.0 / 1000000.0);\nvar_dump (substr (sprintf (\"%.35f\", 0.002877), 0, 10));\n?>")).toMatchSnapshot();
  });
});
