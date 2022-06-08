// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug52211.phpt
  it("Bug #52211 (iconv() returns part of string on error)", function () {
    expect(parser.parseCode("<?php\n$str = \"PATHOLOGIES MÉDICO-CHIRUR. ADUL. PL\";\n$str_iconv = iconv('CP850', 'ISO-8859-1', $str );\nvar_dump($str_iconv);\n?>")).toMatchSnapshot();
  });
});
