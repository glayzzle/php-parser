// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_shorthash.phpt
  it("Check for libsodium shorthash", function () {
    expect(parser.parseCode("<?php\n$m1 = 'message';\n$k1 = '0123456789ABCDEF';\n$h1 = sodium_crypto_shorthash($m1, $k1);\necho bin2hex($h1) . \"\\n\";\n$k2 = '0123456789abcdef';\n$h2 = sodium_crypto_shorthash($m1, $k2);\necho bin2hex($h2) . \"\\n\";\n$m2 = 'msg';\n$h3 = sodium_crypto_shorthash($m2, $k2);\necho bin2hex($h3) . \"\\n\";\ntry {\n    sodium_crypto_shorthash($m1, $k1 . $k2);\n} catch (SodiumException $ex) {\n    var_dump(true);\n}\n?>")).toMatchSnapshot();
  });
});
