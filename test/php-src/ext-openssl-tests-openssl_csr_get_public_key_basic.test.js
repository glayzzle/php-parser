// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_csr_get_public_key_basic.phpt
  it("openssl_csr_get_public_key() tests", function () {
    expect(parser.parseCode("<?php\n$config = __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf';\n$phex = 'dcf93a0b883972ec0e19989ac5a2ce310e1d37717e8d9571bb7623731866e61e' .\n        'f75a2e27898b057f9891c2e27a639c3f29b60814581cd3b2ca3986d268370557' .\n        '7d45c2e7e52dc81c7a171876e5cea74b1448bfdfaf18828efd2519f14e45e382' .\n        '6634af1949e5b535cc829a483b8a76223e5d490a257f05bdff16f2fb22c583ab';\n$dh_details = array('p' => $phex, 'g' => '2');\n$dh = openssl_pkey_new(array(\n    'dh'=> array('p' => hex2bin($phex), 'g' => '2'))\n);\n$dn = array(\n    \"countryName\" => \"BR\",\n    \"stateOrProvinceName\" => \"Rio Grande do Sul\",\n    \"localityName\" => \"Porto Alegre\",\n    \"commonName\" => \"Henrique do N. Angelo\",\n    \"emailAddress\" => \"hnangelo@php.net\"\n);\n$args = array(\n    \"digest_alg\" => \"sha1\",\n    \"private_key_bits\" => 2048,\n    \"private_key_type\" => OPENSSL_KEYTYPE_DSA,\n    \"encrypt_key\" => true,\n    \"config\" => $config,\n);\n$privkey_file = 'file://' . __DIR__ . '/private_rsa_2048.key';\n$csr = openssl_csr_new($dn, $privkey_file, $args);\n$csr_file = file_get_contents(__DIR__ . '/cert.csr');\nvar_dump(openssl_csr_get_public_key($csr));\nvar_dump(openssl_csr_get_public_key($csr_file));\n?>")).toMatchSnapshot();
  });
});
