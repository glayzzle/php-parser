// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug32589.phpt
  it("Bug #32589 (crash inside imap_mail_compose() function)", function () {
    expect(parser.parseCode("<?php\n$m_envelope[\"To\"] = \"mail@example.com\";\n$m_part1[\"type\"] = TYPEMULTIPART;\n$m_part1[\"subtype\"] = \"mixed\";\n$m_part2[\"type\"] = TYPETEXT;\n$m_part2[\"subtype\"] = \"plain\";\n$m_part2[\"description\"] = \"text_message\";\n$m_part2[\"charset\"] = \"ISO-8859-2\";\n$m_part2[\"contents.data\"] = \"hello\";\n$m_body[1] = $m_part1;\n$m_body[2] = $m_part2;\necho imap_mail_compose($m_envelope, $m_body);\n?>")).toMatchSnapshot();
  });
});
