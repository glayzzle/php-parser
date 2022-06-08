// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/gh7902.phpt
  it("GH-7902 (mb_send_mail may delimit headers with LF only)", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding(\"UTF-8\");\nmb_language(\"uni\");\n$to = \"omittedvalidaddress@example.com\";\n$subject = \"test mail\";\n$message = \"body of testing php mail\";\n$header[\"Mime-Version\"] = \"1.0\";\n$header[\"Content-Type\"] = \"text/html; charset=UTF-8\";\n$header[\"From\"] = \"omittedvalidaddress2@example.com\";\n$header[\"X-Mailer\"] = \"PHP/\" . phpversion();\nmb_send_mail($to, $subject, $message, $header);\n$stream = fopen(__DIR__ . \"/gh7902.eml\", \"rb\");\n$eml = stream_get_contents($stream);\nfclose($stream);\nvar_dump(preg_match_all('/(?<!\\r)\\n/', $eml));\n?>")).toMatchSnapshot();
  });
});
