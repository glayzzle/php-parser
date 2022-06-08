// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_scalarmult.phpt
  it("Check for libsodium scalarmult", function () {
    expect(parser.parseCode("<?php\n$n = sodium_hex2bin(\"5dab087e624a8a4b79e17f8b83800ee66f3bb1292618b6fd1c2f8b27ff88e0eb\");\n$p = sodium_hex2bin(\"8520f0098930a754748b7ddcb43ef75a0dbf3a0d26381af4eba4a98eaa9b4e6a\");\n$q = sodium_crypto_scalarmult($n, $p);\nvar_dump(sodium_bin2hex($q));\ntry {\n    sodium_crypto_scalarmult(substr($n, 1), $p);\n} catch (SodiumException $ex) {\n    var_dump(true);\n}\n?>")).toMatchSnapshot();
  });
});
