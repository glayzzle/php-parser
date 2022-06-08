// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strpos.phpt
  it("iconv_strpos()", function () {
    expect(parser.parseCode("<?php\nfunction foo($haystk, $needle, $offset, $to_charset = false, $from_charset = false)\n{\n    if ($from_charset !== false) {\n        $haystk = iconv($from_charset, $to_charset, $haystk);\n    }\n    try {\n        var_dump(strpos($haystk, $needle, $offset));\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    try {\n        if ($to_charset !== false) {\n            var_dump(iconv_strpos($haystk, $needle, $offset, $to_charset));\n        } else {\n            var_dump(iconv_strpos($haystk, $needle, $offset));\n        }\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\nfoo(\"abecdbcdabef\", \"bcd\", -1);\nfoo(\"abecdbcdabef\", \"bcd\", -7);\nfoo(\"abecdbcdabef\", \"bcd\", 12);\nfoo(\"abecdbcdabef\", \"bcd\", 100000);\nfoo(\"abcabcabcdabcababcdabc\", \"bcd\", 0);\nfoo(\"abcabcabcdabcababcdabc\", \"bcd\", 10);\nfoo(str_repeat(\"abcab\", 60).\"abcdb\".str_repeat(\"adabc\", 60), \"abcd\", 0);\nfoo(str_repeat(\"����������\", 30).\"����������\".str_repeat(\"����������\", 30), \"����\", 0, \"EUC-JP\");\n$str = str_repeat(\"����������\", 60).'$'.str_repeat(\"����������\", 60);\nfoo($str, '$', 0, \"ISO-2022-JP\", \"EUC-JP\");\nvar_dump(iconv_strpos(\"string\", \"\"));\nvar_dump(iconv_strpos(\"\", \"string\"));\n?>")).toMatchSnapshot();
  });
});
