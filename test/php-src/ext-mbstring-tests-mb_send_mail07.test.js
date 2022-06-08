// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail07.phpt
  it("mb_send_mail() test 7 (lang=Korean)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* Korean */\nif (mb_language(\"korean\")) {\n    mb_internal_encoding('EUC-KR');\n    mb_send_mail($to, \"�׽�Ʈ \".mb_language(), \"�׽�Ʈ\");\n}\n?>")).toMatchSnapshot();
  });
});
