// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_parse_basic.phpt
  it("openssl_x509_parse() tests", function () {
    expect(parser.parseCode("<?php\n$cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$parsedCert = openssl_x509_parse($cert);\nvar_dump($parsedCert === openssl_x509_parse(openssl_x509_read($cert)));\nvar_dump($parsedCert);\nvar_dump(openssl_x509_parse($cert, false));\n?>")).toMatchSnapshot();
  });
});
