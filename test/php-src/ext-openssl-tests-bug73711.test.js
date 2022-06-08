// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug73711.phpt
  it("Bug #73711: Segfault in openssl_pkey_new when generating DSA or DH key", function () {
    expect(parser.parseCode("<?php\n$config = __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf';\nvar_dump(openssl_pkey_new([\n    \"private_key_type\" => OPENSSL_KEYTYPE_DSA,\n    \"private_key_bits\" => 1024,\n    'config' => $config,\n]));\nvar_dump(openssl_pkey_new([\n    \"private_key_type\" => OPENSSL_KEYTYPE_DH,\n    \"private_key_bits\" => 512,\n    'config' => $config,\n]));\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
