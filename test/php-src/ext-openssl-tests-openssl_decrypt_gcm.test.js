// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_decrypt_gcm.phpt
  it("openssl_decrypt() with GCM cipher algorithm tests", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . \"/cipher_tests.inc\";\n$method = 'aes-128-gcm';\n$tests = openssl_get_cipher_tests($method);\nforeach ($tests as $idx => $test) {\n    echo \"TEST $idx\\n\";\n    $pt = openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n        $test['iv'], $test['tag'], $test['aad']);\n    var_dump($test['pt'] === $pt);\n}\n// no IV\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    '', $test['tag'], $test['aad']));\n// failed because no AAD\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    $test['iv'], $test['tag']));\n// failed because wrong tag\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    $test['iv'], str_repeat('x', 16), $test['aad']));\n?>")).toMatchSnapshot();
  });
});
