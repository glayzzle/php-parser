// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_kdf.phpt
  it("Check for libsodium KDF", function () {
    expect(parser.parseCode("<?php\n$key = sodium_crypto_kdf_keygen();\ntry {\n  $subkey = sodium_crypto_kdf_derive_from_key(10, 0, \"context!\", $key);\n} catch (SodiumException $ex) {\n  var_dump(true);\n}\ntry {\n  $subkey = sodium_crypto_kdf_derive_from_key(100, 0, \"context!\", $key);\n} catch (SodiumException $ex) {\n  var_dump(true);\n}\ntry {\n  $subkey = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MAX, 0, \"context\", $key);\n} catch (SodiumException $ex) {\n  var_dump(true);\n}\ntry {\n  $subkey = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MAX, -1, \"context!\", $key);\n} catch (SodiumException $ex) {\n  var_dump(true);\n}\ntry {\n  $subkey = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MAX, 0, \"context!\", \"short key\");\n} catch (SodiumException $ex) {\n  var_dump(true);\n}\n$subkey1 = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MIN, 0, \"context!\", $key);\n$subkey2 = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MIN, 1, \"context!\", $key);\n$subkey3 = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MIN, 2, \"context2\", $key);\n$subkey4 = sodium_crypto_kdf_derive_from_key(SODIUM_CRYPTO_KDF_BYTES_MIN, 0, \"context!\", $key);\nvar_dump($subkey1 !== $subkey2);\nvar_dump($subkey1 !== $subkey3);\nvar_dump($subkey2 !== $subkey3);\nvar_dump($subkey1 === $subkey4);\n?>")).toMatchSnapshot();
  });
});
