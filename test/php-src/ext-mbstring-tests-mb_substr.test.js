// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr.phpt
  it("mb_substr()", function () {
    expect(parser.parseCode("<?php\n// TODO: Add more encodings\nini_set('include_path','.');\ninclude_once('common.inc');\n// EUC-JP\n$euc_jp = '0123����ʸ��������ܸ�Ǥ���EUC-JP��ȤäƤ��ޤ������ܸ�����ݽ�����';\nprint  \"1: \". bin2hex(mb_substr($euc_jp,  10,  10,'EUC-JP')) . \"\\n\";\nprint  \"2: \". bin2hex(mb_substr($euc_jp,   0, 100,'EUC-JP')) . \"\\n\";\n$str = mb_substr($euc_jp, 100, 10,'EUC-JP');\n// Note: returns last character\n($str === \"\") ? print \"3 OK\\n\" : print \"NG: \".bin2hex($str).\"\\n\";\n$str = mb_substr($euc_jp, -100, 10,'EUC-JP');\n($str !== \"\") ? print \"4 OK: \".bin2hex($str).\"\\n\" : print \"NG: \".bin2hex($str).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
