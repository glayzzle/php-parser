// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_secretbox.phpt
  it("Check for libsodium secretbox", function () {
    expect(parser.parseCode("<?php\n$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);\n$key = sodium_crypto_secretbox_keygen();\n$a = sodium_crypto_secretbox('test', $nonce, $key);\n$x = sodium_crypto_secretbox_open($a, $nonce, $key);\nvar_dump(bin2hex($x));\n$y = sodium_crypto_secretbox_open(\"\\0\" . $a, $nonce, $key);\nvar_dump($y);\ntry {\n    sodium_crypto_secretbox('test', substr($nonce, 1), $key);\n} catch (SodiumException $ex) {\n    var_dump(true);\n}\n?>")).toMatchSnapshot();
  });
});
