// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail01.phpt
  it("mb_send_mail() test 1 (lang=neutral)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* neutral (UTF-8) */\nif (mb_language(\"neutral\")) {\n    mb_internal_encoding(\"UTF-8\");\n    mb_send_mail($to, \"test \".mb_language(), \"test\");\n}\n?>")).toMatchSnapshot();
  });
});
