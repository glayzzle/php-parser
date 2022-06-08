// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_substr.phpt
  it("iconv_substr()", function () {
    expect(parser.parseCode("<?php\nfunction hexdump($str) {\n    $len = strlen($str);\n    for ($i = 0; $i < $len; ++$i) {\n        printf(\"%02x\", ord($str[$i]));\n    }\n    print \"\\n\";\n}\nfunction foo($str, $offset, $len, $charset) {\n    hexdump(substr($str, $offset, $len));\n    hexdump(iconv_substr($str, $offset, $len, $charset));\n}\nfunction bar($str, $offset, $len = false) {\n    if (is_bool($len)) {\n        var_dump(substr($str, $offset));\n        var_dump(iconv_substr($str, $offset));\n    } else {\n        var_dump(substr($str, $offset, $len));\n        var_dump(iconv_substr($str, $offset, $len));\n    }\n}\nfoo(\"abcdefghijklmnopqrstuvwxyz\", 5, 7, \"ASCII\");\nfoo(\"��������������������������\", 5, 7, \"EUC-JP\");\nbar(\"This is a test\", 100000);\nbar(\"This is a test\", 0, 100000);\nbar(\"This is a test\", -3);\nbar(\"This is a test\", -3, null);\nbar(\"This is a test\", 0, -9);\nbar(\"This is a test\", 0, -100000);\nbar(\"This is a test\", -9, -100000);\nvar_dump(iconv(\"ISO-2022-JP\", \"EUC-JP\", iconv_substr(iconv(\"EUC-JP\", \"ISO-2022-JP\", \"����ˤ��� ISO-2022-JP\"), 3, 8, \"ISO-2022-JP\")));\n?>")).toMatchSnapshot();
  });
});
