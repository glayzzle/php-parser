// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug35669.phpt
  it("Bug #35669 (imap_mail_compose() crashes with multipart-multiboundary-email)", function () {
    expect(parser.parseCode("<?php\n$envelope[\"from\"] = 'Santa <somewhere@northpole.gov>';\n$envelope[\"to\"]  = 'The bad smurf <bad@smurf.com>';\n$envelope['date'] = 'Wed, 04 Jan 2006 19:24:43 -0500';\n$multipart[\"type\"] = TYPEMULTIPART;\n$multipart[\"subtype\"] = \"MIXED\";\n$body[] = $multipart; //add multipart stuff\n$textpart[\"type\"] = TYPEMULTIPART;\n$textpart[\"subtype\"] = \"ALTERNATIVE\";\n$body[] = $textpart; //add body part\n$plain[\"type\"] = TYPETEXT;\n$plain[\"subtype\"] = \"PLAIN\";\n$plain[\"charset\"] = \"iso-8859-1\";\n$plain[\"encoding\"] = ENCQUOTEDPRINTABLE;\n$plain[\"description\"] = \"Plaintype part of message\";\n$plain['disposition'] = \"inline\";\n$plain[\"contents.data\"] = 'See mom, it will crash';\n$body[] = $plain; //next add plain text part\n$html[\"type\"] = TYPETEXT;\n$html[\"subtype\"] = \"HTML\";\n$html[\"charset\"] = \"iso-8859-1\";\n$html[\"encoding\"] = ENCQUOTEDPRINTABLE;\n$html[\"description\"] = \"HTML part of message\";\n$html['disposition'] = \"inline\";\n$html[\"contents.data\"] = 'See mom, it will <b>crash</b>';\n$body[] = $html;\necho imap_mail_compose($envelope, $body);\n?>")).toMatchSnapshot();
  });
});
