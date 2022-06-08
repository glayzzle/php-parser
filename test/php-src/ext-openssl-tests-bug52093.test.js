// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug52093.phpt
  it("Bug #52093 (openssl_csr_sign truncates $serial)", function () {
    expect(parser.parseCode("<?php\n$dn = array(\n    \"countryName\" => \"BR\",\n    \"stateOrProvinceName\" => \"Rio Grande do Sul\",\n    \"localityName\" => \"Porto Alegre\",\n    \"commonName\" => \"Henrique do N. Angelo\",\n    \"emailAddress\" => \"hnangelo@php.net\"\n);\n$options = ['config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf'];\n$privkey = openssl_pkey_new();\n$csr = openssl_csr_new($dn, $privkey, $options);\n$cert = openssl_csr_sign($csr, null, $privkey, 365, $options, PHP_INT_MAX);\nvar_dump(openssl_x509_parse($cert)['serialNumber']);\n?>")).toMatchSnapshot();
  });
});
