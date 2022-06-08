// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_004.phpt
  it("string offset 004", function () {
    expect(parser.parseCode("<?php\n// Test assignments using (positive and negative) string offsets\n$str = \"abcdefghijklmno\";\n$i = 3;\n$j = -4;\n$str[2] = 'C';\nvar_dump($str);\n$str[$i] = 'Z';\nvar_dump($str);\n$str[-5] = 'P';\nvar_dump($str);\n$str[$j] = 'Q';\nvar_dump($str);\n$str[-20] = 'Y';\nvar_dump($str);\n$str[-strlen($str)] = strtoupper($str[0]); /* An exotic ucfirst() ;) */\nvar_dump($str);\n$str[20] = 'N';\nvar_dump($str);\n$str[-2] = 'UFO';\nvar_dump($str);\n$str[-$i] = $str[$j*2];\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
