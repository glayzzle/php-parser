// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_stream.phpt
  it("Check for libsodium stream", function () {
    expect(parser.parseCode("<?php\n$nonce = random_bytes(SODIUM_CRYPTO_STREAM_NONCEBYTES);\n$key = sodium_crypto_stream_keygen();\n$len = 100;\n$stream = sodium_crypto_stream($len, $nonce, $key);\nvar_dump(strlen($stream));\n$stream2 = sodium_crypto_stream($len, $nonce, $key);\n$nonce = random_bytes(SODIUM_CRYPTO_STREAM_NONCEBYTES);\n$stream3 = sodium_crypto_stream($len, $nonce, $key);\n$key = sodium_crypto_stream_keygen();\n$stream4 = sodium_crypto_stream($len, $nonce, $key);\nvar_dump($stream === $stream2);\nvar_dump($stream !== $stream3);\nvar_dump($stream !== $stream4);\nvar_dump($stream2 !== $stream3);\nvar_dump($stream2 !== $stream4);\nvar_dump($stream3 !== $stream4);\n$stream5 = sodium_crypto_stream_xor($stream, $nonce, $key);\nvar_dump($stream5 !== $stream);\n$stream6 = sodium_crypto_stream_xor($stream5, $nonce, $key);\nvar_dump($stream6 === $stream);\ntry {\n    sodium_crypto_stream($len, substr($nonce, 1), $key);\n} catch (SodiumException $ex) {\n    var_dump(true);\n}\n?>")).toMatchSnapshot();
  });
});
