// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_encrypt_error.phpt
  it("openssl_encrypt() error tests", function () {
    expect(parser.parseCode("<?php\n$data = \"openssl_encrypt() tests\";\n$method = \"AES-128-CBC\";\n$password = \"openssl\";\n$iv = str_repeat(\"\\0\", openssl_cipher_iv_length($method));\n$wrong = \"wrong\";\n$object = new stdclass;\n$arr = array(1);\n// wrong parameters tests\nvar_dump(openssl_encrypt($data, $wrong, $password));\n// padding of the key is disabled\nvar_dump(openssl_encrypt($data, $method, $password, OPENSSL_DONT_ZERO_PAD_KEY, $iv));\n?>")).toMatchSnapshot();
  });
});
