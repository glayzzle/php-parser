// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug74099.phpt
  it("Bug #74099 Memory leak with openssl_encrypt()", function () {
    expect(parser.parseCode("<?php\n$aad = random_bytes(32);\n$iv = random_bytes(16);\n$key = random_bytes(32);\n$plaintext = '';\n$tag = null;\n$ciphertext = openssl_encrypt($plaintext, 'aes-256-gcm', $key, \\OPENSSL_RAW_DATA, $iv, $tag, $aad);\nvar_dump($ciphertext);\n?>")).toMatchSnapshot();
  });
});
