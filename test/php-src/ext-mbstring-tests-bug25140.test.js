// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug25140.phpt
  it("Bug #25140 (mb_convert_encoding returns FALSE on an empty string)", function () {
    expect(parser.parseCode("<?php\nvar_dump( mb_convert_encoding( '', 'SJIS', 'EUC-JP' ) );\n?>")).toMatchSnapshot();
  });
});
