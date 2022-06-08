// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_get_cipher_methods.phpt
  it("openssl_get_cipher_methods basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_array(openssl_get_cipher_methods(true)));\nvar_dump(is_array(openssl_get_cipher_methods(false)));\n?>")).toMatchSnapshot();
  });
});
