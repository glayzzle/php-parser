// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80710_2.phpt
  it("Bug #80710 (imap_mail_compose() header injection) - Remail", function () {
    expect(parser.parseCode("<?php\n$envelope[\"from\"]= \"joe@example.com\\n From : X-INJECTED\";\n$envelope[\"to\"]  = \"foo@example.com\\nFrom: X-INJECTED\";\n$envelope[\"cc\"]  = \"bar@example.com\\nFrom: X-INJECTED\";\n$envelope[\"subject\"]  = \"bar@example.com\\n\\n From : X-INJECTED\";\n$envelope[\"remail\"]  = \"X-INJECTED-REMAIL: X-INJECTED\\nFrom: X-INJECTED-REMAIL-FROM\"; //<--- Injected as first hdr\n$envelope[\"something\"]  = \"bar@example.com\\nFrom: X-INJECTED\";\n$part1[\"type\"] = TYPEMULTIPART;\n$part1[\"subtype\"] = \"mixed\";\n$part2[\"type\"] = TYPEAPPLICATION;\n$part2[\"encoding\"] = ENCBINARY;\n$part2[\"subtype\"] = \"octet-stream\\nContent-Type: X-INJECTED\";\n$part2[\"description\"] = \"some file\\nContent-Type: X-INJECTED\";\n$part2[\"contents.data\"] = \"ABC\\nContent-Type: X-INJECTED\";\n$part3[\"type\"] = TYPETEXT;\n$part3[\"subtype\"] = \"plain\";\n$part3[\"description\"] = \"description3\";\n$part3[\"contents.data\"] = \"contents.data3\\n\\n\\n\\t\";\n$body[1] = $part1;\n$body[2] = $part2;\n$body[3] = $part3;\necho imap_mail_compose($envelope, $body);\n?>")).toMatchSnapshot();
  });
});
