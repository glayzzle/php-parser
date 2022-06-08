// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug28382.phpt
  it("Bug #28382 (openssl_x509_parse extensions support)", function () {
    expect(parser.parseCode("<?php\n$cert = file_get_contents(__DIR__ . \"/bug28382cert.txt\");\n$ext = openssl_x509_parse($cert);\nvar_dump($ext['extensions']);\n/*\n * The reason for %A at the end of crlDistributionPoints and authorityKeyIdentifier is that\n * OpenSSL 3.0 removes new lines which were present in previous versions.\n */\n?>")).toMatchSnapshot();
  });
});
