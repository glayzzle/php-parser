// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strrpos.phpt
  it("iconv_strrpos()", function () {
    expect(parser.parseCode("<?php\nfunction my_error_handler($errno, $errmsg, $filename, $linenum)\n{\n    echo \"$errno: $errmsg\\n\";\n}\nset_error_handler('my_error_handler');\nfunction foo($haystk, $needle, $to_charset = false, $from_charset = false)\n{\n    if ($from_charset !== false) {\n        $haystk = iconv($from_charset, $to_charset, $haystk);\n    }\n    if ($to_charset !== false) {\n        var_dump(iconv_strlen($haystk, $to_charset));\n        var_dump(iconv_strrpos($haystk, $needle, $to_charset));\n    } else {\n        var_dump(iconv_strlen($haystk));\n        var_dump(iconv_strrpos($haystk, $needle));\n    }\n}\nfoo(\"abecdbcdabcdef\", \"bcd\");\nfoo(str_repeat(\"abcab\", 60).\"abcdb\".str_repeat(\"adabc\", 60), \"abcd\");\nfoo(str_repeat(\"����������\", 30).\"����������\".str_repeat(\"����������\", 30), \"����\", \"EUC-JP\");\nfor ($i = 0; $i <=6; ++$i) {\n    $str = str_repeat(\"����������\", 60).str_repeat('$', $i).str_repeat(\"����������\", 60);\n    foo($str, '$', \"ISO-2022-JP\", \"EUC-JP\");\n}\nvar_dump(iconv_strrpos(\"string\", \"\"));\nvar_dump(iconv_strrpos(\"\", \"string\"));\n?>")).toMatchSnapshot();
  });
});
