// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strwidth.phpt
  it("mb_strwidth()", function () {
    expect(parser.parseCode("<?php\nini_set('include_path', __DIR__);\ninclude_once('common.inc');\n// EUC-JP\n$euc_jp  = pack('H*', '30313233a4b3a4cecab8bbfacef3a4cfc6fccbdcb8eca4c7a4b9a1a34555432d4a50a4f2bbc8a4c3a4c6a4a4a4dea4b9a1a3c6fccbdcb8eca4cfccccc5ddbdada4a4a1a3');\n// UTF-8\n$utf8    = '∮ E⋅da = Q';\n// UTF-16LE\n$utf16le = pack('H*', '1a043804400438043b043b04380446043004200069007300200043007900720069006c006c0069006300');\n// UTF-16BE\n$utf16be = pack('H*', '041a043804400438043b043b04380446043000200069007300200043007900720069006c006c00690063');\n// KOI8-R\n$koi8r   = pack('H*', 'ebc9d2c9ccccc9c3c120697320437972696c6c6963');\nprint \"1: \" . mb_strwidth($euc_jp,  'EUC-JP')   . \"\\n\";\nprint \"2: \" . mb_strwidth($utf8,    'UTF-8')    . \"\\n\";\nprint \"3: \" . mb_strwidth($utf16le, 'UTF-16LE') . \"\\n\";\nprint \"4: \" . mb_strwidth($utf16be, 'UTF-16BE') . \"\\n\";\nprint \"5: \" . mb_strwidth($koi8r,   'KOI8-R')   . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
