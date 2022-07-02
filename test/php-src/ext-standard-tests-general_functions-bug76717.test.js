// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug76717.phpt
  it("Bug #76717: var_export() does not create a parsable value for PHP_INT_MIN", function () {
    expect(parser.parseCode("<?php\n$min = eval('return '.var_export(PHP_INT_MIN, true).';');\n$max = eval('return '.var_export(PHP_INT_MAX, true).';');\nvar_dump($min === PHP_INT_MIN);\nvar_dump($max === PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
