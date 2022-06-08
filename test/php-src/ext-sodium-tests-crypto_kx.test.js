// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_kx.phpt
  it("Check for libsodium-based key exchange", function () {
    expect(parser.parseCode("<?php\n$client_seed = sodium_hex2bin('0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef');\n$client_keypair = sodium_crypto_kx_seed_keypair($client_seed);\n$server_seed = sodium_hex2bin('f123456789abcdef0123456789abcdef0123456789abcdef0123456789abcde0');\n$server_keypair = sodium_crypto_kx_seed_keypair($server_seed);\nvar_dump(sodium_bin2hex($client_keypair));\nvar_dump(sodium_bin2hex($server_keypair));\n$client_session_keys =\n  sodium_crypto_kx_client_session_keys($client_keypair,\n    sodium_crypto_kx_publickey($server_keypair));\n$server_session_keys =\n  sodium_crypto_kx_server_session_keys($server_keypair,\n    sodium_crypto_kx_publickey($client_keypair));\nvar_dump(sodium_bin2hex($client_session_keys[0]));\nvar_dump(sodium_bin2hex($server_session_keys[1]));\nvar_dump(sodium_bin2hex($client_session_keys[1]));\nvar_dump(sodium_bin2hex($server_session_keys[0]));\n?>")).toMatchSnapshot();
  });
});
