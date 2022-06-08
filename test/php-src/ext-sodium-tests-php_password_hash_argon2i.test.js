// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/php_password_hash_argon2i.phpt
  it("Test interoperability of password_hash('argon2i')", function () {
    expect(parser.parseCode("<?php\necho 'Argon2 provider: ';\nvar_dump(PASSWORD_ARGON2_PROVIDER);\nforeach([1, 2] as $mem) {\n  foreach([1, 2] as $time) {\n    $opts = [\n      'memory_cost' => PASSWORD_ARGON2_DEFAULT_MEMORY_COST * $mem,\n      'time_cost'   => PASSWORD_ARGON2_DEFAULT_TIME_COST * $time,\n      'threads'     => PASSWORD_ARGON2_DEFAULT_THREADS,\n    ];\n    $password = random_bytes(32);\n    echo \"Using password: \";\n    var_dump(base64_encode($password));\n    $hash = password_hash($password, 'argon2i', $opts);\n    echo \"Hash: \"; var_dump($hash);\n    var_dump(sodium_crypto_pwhash_str_verify($hash, $password));\n    // And verify that incorrect passwords fail.\n    $password[0] = chr(ord($password[0]) ^ 1);\n    var_dump(sodium_crypto_pwhash_str_verify($hash, $password));\n  }\n}\n?>")).toMatchSnapshot();
  });
});
