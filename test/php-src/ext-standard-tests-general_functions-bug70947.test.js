// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug70947.phpt
  it("Bug #70947 (INI parser segfault with INI_SCANNER_TYPED)", function () {
    expect(parser.parseCode("<?php\n$o = parse_ini_string('foo = bar 123', FALSE, INI_SCANNER_TYPED);\nvar_dump($o);\n?>")).toMatchSnapshot();
  });
});
