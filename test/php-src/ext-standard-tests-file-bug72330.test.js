// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug72330.phpt
  it("Bug #72330 (CSV fields incorrectly split if escape char followed by UTF chars)", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, \"en_US.utf8\", \"en_AU.utf8\", \"ko_KR.utf8\", \"zh_CN.utf8\", \"de_DE.utf8\", \"es_EC.utf8\", \"fr_FR.utf8\", \"ja_JP.utf8\", \"el_GR.utf8\", \"nl_NL.utf8\");\n$utf_1 = chr(0xD1) . chr(0x81); // U+0440;\n$utf_2   = chr(0xD8) . chr(0x80); // U+0600\n$string = '\"first #' . $utf_1 . $utf_2 . '\";\"second\"';\n$fields = str_getcsv($string, ';', '\"', \"#\");\nvar_dump($fields);\n?>")).toMatchSnapshot();
  });
});
