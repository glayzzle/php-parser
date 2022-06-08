// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug64802.phpt
  it("Bug #64802: openssl_x509_parse fails to parse subject properly in some cases", function () {
    expect(parser.parseCode("<?php\n$cert = file_get_contents(__DIR__.'/bug64802.pem');\n$r = openssl_x509_parse($cert,$use_short_names=false);\nvar_dump($r['subject']['commonName']);\n?>")).toMatchSnapshot();
  });
});
