// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/eucjp2sjis.phpt
  it("EUC-JP to SJIS", function () {
    expect(parser.parseCode("<?php\n/* charset=EUC-JP */\n$str = \"\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n\";\n$str = iconv(\"EUC-JP\", \"SJIS\", $str);\n$str = base64_encode($str);\necho $str.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
