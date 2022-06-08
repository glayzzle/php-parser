// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_auth.phpt
  it("Check for libsodium auth", function () {
    expect(parser.parseCode("<?php\n$msg = random_bytes(1000);\n$key = sodium_crypto_auth_keygen();\n$mac = sodium_crypto_auth($msg, $key);\n// This should validate\nvar_dump(sodium_crypto_auth_verify($mac, $msg, $key));\n$bad_key = random_bytes(SODIUM_CRYPTO_AUTH_KEYBYTES - 1);\ntry {\n    $mac = sodium_crypto_auth($msg, $bad_key);\n    echo 'Fail!', PHP_EOL;\n} catch (SodiumException $ex) {\n  echo $ex->getMessage(), PHP_EOL;\n}\n// Flip the first bit\n$badmsg = $msg;\n$badmsg[0] = \\chr(\\ord($badmsg[0]) ^ 0x80);\nvar_dump(sodium_crypto_auth_verify($mac, $badmsg, $key));\n// Let's flip a bit pseudo-randomly\n$badmsg = $msg;\n$badmsg[$i=mt_rand(0, 999)] = \\chr(\n    \\ord($msg[$i]) ^ (\n        1 << mt_rand(0, 7)\n    )\n);\nvar_dump(sodium_crypto_auth_verify($mac, $badmsg, $key));\n// Now let's change a bit in the MAC\n$badmac = $mac;\n$badmac[0] = \\chr(\\ord($badmac[0]) ^ 0x80);\nvar_dump(sodium_crypto_auth_verify($badmac, $msg, $key));\n?>")).toMatchSnapshot();
  });
});
