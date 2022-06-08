// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/eucjp2iso2022jp.phpt
  it("EUC-JP to ISO-2022-JP", function () {
    expect(parser.parseCode("<?php\n/* charset=EUC-JP */\nfunction hexdump($str) {\n    $len = strlen($str);\n    for ($i = 0; $i < $len; ++$i) {\n        printf(\"%02x\", ord($str[$i]));\n    }\n    print \"\\n\";\n}\n$str = str_repeat(\"���ܸ�ƥ����Ȥ� English text\", 30);\n$str .= \"���ܸ�\";\necho hexdump(iconv(\"EUC-JP\", \"ISO-2022-JP\", $str));\n?>")).toMatchSnapshot();
  });
});
