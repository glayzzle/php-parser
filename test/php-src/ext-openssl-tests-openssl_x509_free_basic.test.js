// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_free_basic.phpt
  it("openssl_x509_free() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump($res = openssl_x509_read(\"file://\" . __DIR__ . \"/cert.crt\"));\nopenssl_x509_free($res);\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
