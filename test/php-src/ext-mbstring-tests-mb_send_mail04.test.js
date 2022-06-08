// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail04.phpt
  it("mb_send_mail() test 4 (lang=German)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n/* default setting */\nmb_send_mail($to, mb_language(), \"test\");\n/* German (iso-8859-15) */\nif (mb_language(\"german\")) {\n    mb_internal_encoding(\"ISO-8859-15\");\n    mb_send_mail($to, \"Pr\".\"\\xfc\".\"fung \".mb_language(), \"Pr\".\"\\xfc\".\"fung\");\n}\n?>")).toMatchSnapshot();
  });
});
