// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_encrypt_gcm.phpt
  it("openssl_encrypt() with GCM cipher algorithm tests", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . \"/cipher_tests.inc\";\n$method = 'aes-128-gcm';\n$tests = openssl_get_cipher_tests($method);\nforeach ($tests as $idx => $test) {\n    echo \"TEST $idx\\n\";\n    $ct = openssl_encrypt($test['pt'], $method, $test['key'], OPENSSL_RAW_DATA,\n        $test['iv'], $tag, $test['aad'], strlen($test['tag']));\n    var_dump($test['ct'] === $ct);\n    var_dump($test['tag'] === $tag);\n}\n// Empty IV error\nvar_dump(openssl_encrypt('data', $method, 'password', 0, '', $tag, ''));\n// Failing to retrieve tag (max is 16 bytes)\nvar_dump(openssl_encrypt('data', $method, 'password', 0, str_repeat('x', 32), $tag, '', 20));\n// Failing when no tag supplied\nvar_dump(openssl_encrypt('data', $method, 'password', 0, str_repeat('x', 32)));\n?>")).toMatchSnapshot();
  });
});
