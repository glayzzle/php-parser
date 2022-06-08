// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug25614.phpt
  it("openssl: get public key from generated private key", function () {
    expect(parser.parseCode("<?php\n$priv = openssl_pkey_new();\n$pub = openssl_pkey_get_public($priv);\n?>")).toMatchSnapshot();
  });
});
