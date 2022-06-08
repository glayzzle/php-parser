// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/sodium_error_001.phpt
  it("TypeErrors will not contain param values in backtrace", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nfunction do_crypto_shorthash($message, $key) {\n  return sodium_crypto_shorthash($message, $key);\n}\n$m = 12;\n$key = random_bytes(SODIUM_CRYPTO_SHORTHASH_KEYBYTES);\n$hash = do_crypto_shorthash($m, $key);\n?>")).toMatchSnapshot();
  });
});
