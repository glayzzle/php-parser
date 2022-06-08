// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail05.phpt
  it("mb_send_mail() test 5 (lang=Simplified Chinese)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* Simplified Chinese (HK-GB-2312) */\nif (mb_language(\"simplified chinese\")) {\n    mb_internal_encoding('GB2312');\n    mb_send_mail($to, \"���� \".mb_language(), \"����\");\n}\n?>")).toMatchSnapshot();
  });
});
