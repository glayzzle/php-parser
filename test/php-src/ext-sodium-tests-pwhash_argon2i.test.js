// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/pwhash_argon2i.phpt
  it("Check for libsodium argon2i", function () {
    expect(parser.parseCode("<?php\n$passwd = 'password';\n$hash = sodium_crypto_pwhash_str\n  ($passwd, SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,\n            SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE);\nvar_dump(substr($hash, 0, strlen(SODIUM_CRYPTO_PWHASH_STRPREFIX)) ===\n         SODIUM_CRYPTO_PWHASH_STRPREFIX);\n$testHash = '$argon2i$v=19$m=4096,t=3,p=1$MzE4ODFiZWFlMjAzOWUAAA$FWUV6tsyJ32qThiLi1cCsLIbf3dIOG/RwXcTzt536KY';\n$c = sodium_crypto_pwhash_str_verify($testHash, $passwd);\nvar_dump($c);\n$testHash = '$argon2i$v=19$m=4096,t=0,p=1$c29tZXNhbHQAAAAAAAAAAA$JTBozgKQiCn5yKAm3Hz0vUSX/XgfqhZloNCxDWmeDr0';\n$c = sodium_crypto_pwhash_str_verify($testHash, $passwd);\nvar_dump($c);\n$c = sodium_crypto_pwhash_str_verify($hash, $passwd);\nvar_dump($c);\n$c = sodium_crypto_pwhash_str_verify($hash, 'passwd');\nvar_dump($c);\n$salt = random_bytes(SODIUM_CRYPTO_PWHASH_SALTBYTES);\n$out_len = 100;\n$key = sodium_crypto_pwhash\n  ($out_len, $passwd, $salt,\n   SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,\n   SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE,\n   SODIUM_CRYPTO_PWHASH_ALG_DEFAULT);\nvar_dump(strlen($key) === $out_len);\n$key2 = sodium_crypto_pwhash\n  ($out_len, $passwd, $salt,\n   SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,\n   SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE);\nvar_dump($key2 === $key);\n?>")).toMatchSnapshot();
  });
});
