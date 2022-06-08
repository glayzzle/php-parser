// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail03.phpt
  it("mb_send_mail() test 3 (lang=English)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* English (iso-8859-1) */\nif (mb_language(\"english\")) {\n    mb_internal_encoding(\"ISO-8859-1\");\n    mb_send_mail($to, \"test \".mb_language(), \"test\");\n}\n?>")).toMatchSnapshot();
  });
});
