// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_check_encoding_array.phpt
  it("mb_check_encoding() - Circular references", function () {
    expect(parser.parseCode("<?php\nini_set('default_charset', 'UTF-8');\n// Valid - Detects recursion\n$str = \"Japanese UTF-8 text. 日本語のUTF-8テキスト\";\n$arr = [1234, 12.34, TRUE, FALSE, NULL, $str, 'key'=>$str, $str=>'val'];\n$tmp = &$arr;\n$arr[] = $tmp;\nvar_dump(mb_check_encoding($str), mb_check_encoding($arr));\n// Invalid - Return false due to short circuit check\n$str = \"Japanese UTF-8 text. 日本語\\xFE\\x01\\x02のUTF-8テキスト\";\n$arr1 = [1234, 12.34, TRUE, FALSE, NULL, 'key'=>$str, $str=>'val'];\n$tmp = &$arr1;\n$arr1[] = $tmp;\n$arr2 = [1234, 12.34, TRUE, FALSE, NULL, $str=>'val'];\n$tmp = &$arr2;\n$arr2[] = $tmp;\nvar_dump(mb_check_encoding($str), mb_check_encoding($arr1),  mb_check_encoding($arr2));\n?>")).toMatchSnapshot();
  });
});
