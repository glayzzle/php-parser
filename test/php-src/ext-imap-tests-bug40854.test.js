// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug40854.phpt
  it("Bug #40854 (imap_mail_compose() creates an invalid terminator for multipart e-mails)", function () {
    expect(parser.parseCode("<?php\n$envelope[\"from\"]= \"joe@example.com\";\n$envelope[\"to\"]  = \"foo@example.com\";\n$envelope[\"cc\"]  = \"bar@example.com\";\n$part1[\"type\"] = TYPEMULTIPART;\n$part1[\"subtype\"] = \"mixed\";\n$part2[\"type\"] = TYPEAPPLICATION;\n$part2[\"encoding\"] = ENCBINARY;\n$part2[\"subtype\"] = \"octet-stream\";\n$part2[\"description\"] = 'a.txt';\n$part2[\"contents.data\"] = '';\n$part3[\"type\"] = TYPETEXT;\n$part3[\"subtype\"] = \"plain\";\n$part3[\"description\"] = \"description3\";\n$part3[\"contents.data\"] = \"contents.data3\\n\\n\\n\\t\";\n$body[1] = $part1;\n$body[2] = $part2;\n$body[3] = $part3;\necho imap_mail_compose($envelope, $body);\n?>")).toMatchSnapshot();
  });
});
