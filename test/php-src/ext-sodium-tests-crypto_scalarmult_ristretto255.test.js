// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_scalarmult_ristretto255.phpt
  it("Check for libsodium scalarmult ristretto255", function () {
    expect(parser.parseCode("<?php\n$b = sodium_hex2bin(\"e2f2ae0a6abc4e71a884a961c500515f58e30b6aa582dd8db6a65945e08d2d76\");\n$n = str_repeat(\"\\0\", SODIUM_CRYPTO_SCALARMULT_RISTRETTO255_SCALARBYTES);\ntry {\n    $p = sodium_crypto_scalarmult_ristretto255_base($n);\n} catch (SodiumException $ex) {\n    echo $ex->getMessage(), \"\\n\";\n}\ntry {\n    $p2 = sodium_crypto_scalarmult_ristretto255($n, $b);\n} catch (SodiumException $ex) {\n    echo $ex->getMessage(), \"\\n\";\n}\nfor ($i = 1; $i < 16; $i++) {\n    sodium_increment($n);\n    $p = sodium_crypto_scalarmult_ristretto255_base($n);\n    $p2 = sodium_crypto_scalarmult_ristretto255($n, $b);\n    var_dump(sodium_bin2hex($p));\n    assert($p === $p2);\n}\ntry {\n    sodium_crypto_scalarmult(substr($n, 1), $p);\n} catch (SodiumException $ex) {\n    echo $ex->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
