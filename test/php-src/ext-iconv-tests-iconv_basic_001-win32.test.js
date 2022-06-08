// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_basic_001-win32.phpt
  it("Test the basics to function iconv.", function () {
    expect(parser.parseCode("<?php\n$in_charset          = 'UTF-8';\n$out_charset \t     = 'ASCII//TRANSLIT';\n$string_to_translate = 'Žluťoučký kůň\\n';\n$string_out = iconv($in_charset, $out_charset, $string_to_translate);\nvar_dump($string_out);\n?>")).toMatchSnapshot();
  });
});
