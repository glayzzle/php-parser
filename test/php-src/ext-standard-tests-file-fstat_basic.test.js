// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fstat_basic.phpt
  it("Test function fstat() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$fp = fopen (__FILE__, 'r');\nvar_dump(fstat( $fp ) );\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
