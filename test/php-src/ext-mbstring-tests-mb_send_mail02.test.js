// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail02.phpt
  it("mb_send_mail() test 2 (lang=Japanese)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* Japanese (EUC-JP) */\nif (mb_language(\"japanese\")) {\n    mb_internal_encoding('EUC-JP');\n    mb_send_mail($to, \"�ƥ��� \".mb_language(), \"�ƥ���\");\n}\n?>")).toMatchSnapshot();
  });
});
