// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_count.phpt
  it("mb_substr_count()", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding(\"EUC-JP\");\n    try {\n        var_dump(mb_substr_count(\"\", \"\"));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    try {\n        var_dump(mb_substr_count(\"��\", \"\"));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump(mb_substr_count(\"\", \"��\"));\n    var_dump(mb_substr_count(\"\", \"��\"));\n    var_dump(mb_substr_count(\"\", chr(0)));\n    $a = str_repeat(\"abcacba\", 100);\n    var_dump(@mb_substr_count($a, \"bca\"));\n    $a = str_repeat(\"��������������\", 100);\n    $b = \"������\";\n    var_dump(@mb_substr_count($a, $b));\n    $to_enc = \"UTF-8\";\n    var_dump(@mb_substr_count(mb_convert_encoding($a, $to_enc),\n                              mb_convert_encoding($b, $to_enc), $to_enc));\n    $to_enc = \"Shift_JIS\";\n    var_dump(@mb_substr_count(mb_convert_encoding($a, $to_enc),\n                              mb_convert_encoding($b, $to_enc), $to_enc));\n    $a = str_repeat(\"abcacbabca\", 100);\n    var_dump(@mb_substr_count($a, \"bca\"));\n?>")).toMatchSnapshot();
  });
});
