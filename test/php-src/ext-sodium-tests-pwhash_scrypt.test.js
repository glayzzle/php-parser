// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/pwhash_scrypt.phpt
  it("Check for libsodium scrypt", function () {
    expect(parser.parseCode("<?php\n$passwd = 'test';\n$hash = sodium_crypto_pwhash_scryptsalsa208sha256_str\n  ($passwd, SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_INTERACTIVE,\n            SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_INTERACTIVE);\nvar_dump(substr($hash, 0, 3) ===\n         SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_STRPREFIX);\n$c = sodium_crypto_pwhash_scryptsalsa208sha256_str_verify($hash, $passwd);\nvar_dump($c);\n$c = sodium_crypto_pwhash_scryptsalsa208sha256_str_verify($hash, 'passwd');\nvar_dump($c);\n$salt = random_bytes(SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_SALTBYTES);\n$out_len = 100;\n$key = sodium_crypto_pwhash_scryptsalsa208sha256\n  ($out_len, $passwd, $salt,\n   SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_INTERACTIVE,\n   SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_INTERACTIVE);\nvar_dump(strlen($key) === $out_len);\n?>")).toMatchSnapshot();
  });
});
