// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug67403.phpt
  it("Bug #67403: Add signatureType to openssl_x509_parse", function () {
    expect(parser.parseCode("<?php\n$r = openssl_x509_parse(file_get_contents(__DIR__.'/bug64802.pem'));\nvar_dump($r['signatureTypeSN']);\nvar_dump($r['signatureTypeLN']);\nvar_dump($r['signatureTypeNID']);\n$r = openssl_x509_parse(file_get_contents(__DIR__.'/bug37820cert.pem'));\nvar_dump($r['signatureTypeSN']);\nvar_dump($r['signatureTypeLN']);\nvar_dump($r['signatureTypeNID']);\n?>")).toMatchSnapshot();
  });
});
