// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_check_encoding.phpt
  it("mb_check_encoding()", function () {
    expect(parser.parseCode("<?php\nini_set('default_charset', 'UTF-8');\n// Valid\n$str = \"Japanese UTF-8 text. 日本語のUTF-8テキスト\";\n$arr = [1234, 12.34, TRUE, FALSE, NULL, $str, 'key'=>$str, $str=>'val'];\nvar_dump(mb_check_encoding($str), mb_check_encoding($arr));\n// Invalid\n$str = \"Japanese UTF-8 text. 日本語\\xFE\\x01\\x02のUTF-8テキスト\";\n$arr1 = [1234, 12.34, TRUE, FALSE, NULL, 'key'=>$str, $str=>'val'];\n$arr2 = [1234, 12.34, TRUE, FALSE, NULL, $str=>'val'];\nvar_dump(mb_check_encoding($str), mb_check_encoding($arr1),  mb_check_encoding($arr2));\n?>")).toMatchSnapshot();
  });
});
