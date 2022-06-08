// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_decrypt_error.phpt
  it("openssl_decrypt() error tests", function () {
    expect(parser.parseCode("<?php\n$data = \"openssl_decrypt() tests\";\n$method = \"AES-128-CBC\";\n$password = \"openssl\";\n$wrong = base64_encode(\"wrong\");\n$iv = str_repeat(\"\\0\", openssl_cipher_iv_length($method));\n$encrypted = openssl_encrypt($data, $method, $password);\nvar_dump($encrypted); /* Not passing $iv should be the same as all-NULL iv, but with a warning */\nvar_dump(openssl_encrypt($data, $method, $password, 0, $iv));\nvar_dump(openssl_decrypt($encrypted, $method, $wrong));\nvar_dump(openssl_decrypt($encrypted, $wrong, $password));\nvar_dump(openssl_decrypt($wrong, $method, $password));\nvar_dump(openssl_decrypt($wrong, $wrong, $password));\nvar_dump(openssl_decrypt($encrypted, $wrong, $wrong));\nvar_dump(openssl_decrypt($wrong, $wrong, $wrong));\n?>")).toMatchSnapshot();
  });
});
