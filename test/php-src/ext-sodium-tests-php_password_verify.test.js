// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/php_password_verify.phpt
  it("Test interoperability of password_verify()", function () {
    expect(parser.parseCode("<?php\n$opsSet = [\n  SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,\n  SODIUM_CRYPTO_PWHASH_OPSLIMIT_MODERATE,\n];\n$memSet = [\n  SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE,\n  SODIUM_CRYPTO_PWHASH_MEMLIMIT_MODERATE,\n];\necho 'Argon2 provider: ';\nvar_dump(PASSWORD_ARGON2_PROVIDER);\nforeach($opsSet as $ops) {\n  foreach($memSet as $mem) {\n    $password = random_bytes(32);\n    echo \"Using password: \";\n    var_dump(base64_encode($password));\n    $hash = sodium_crypto_pwhash_str($password, $ops, $mem);\n    echo \"Hash: \"; var_dump($hash);\n    var_dump(password_verify($password, $hash));\n    // And verify that incorrect passwords fail.\n    $password[0] = chr(ord($password[0]) ^ 1);\n    var_dump(password_verify($password, $hash));\n  }\n}\n?>")).toMatchSnapshot();
  });
});
