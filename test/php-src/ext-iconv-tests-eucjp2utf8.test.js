// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/eucjp2utf8.phpt
  it("EUC-JP to UTF8", function () {
    expect(parser.parseCode("<?php\n/* charset=EUC-JP */\n$str = \"\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n���ܸ�ƥ����Ȥ�English Text\n\";\n$str = iconv(\"EUC-JP\", \"UTF-8\", $str); /* libiconv(1.8) doesn't know \"UTF8\" but \"UTF-8\". */\n$str = base64_encode($str);\necho $str.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
