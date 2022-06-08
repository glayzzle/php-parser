// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail06.phpt
  it("mb_send_mail() test 6 (lang=Traditional Chinese)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* Traditional Chinese () */\nif (mb_language(\"traditional chinese\")) {\n    mb_internal_encoding('BIG5');\n    mb_send_mail($to, \"���� \".mb_language(), \"����\");\n}\n?>")).toMatchSnapshot();
  });
});
