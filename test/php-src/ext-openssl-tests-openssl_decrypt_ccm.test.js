// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_decrypt_ccm.phpt
  it("openssl_decrypt() with CCM cipher algorithm tests", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . \"/cipher_tests.inc\";\n$methods = ['aes-128-ccm', 'aes-256-ccm'];\nforeach ($methods as $method) {\n    $tests = openssl_get_cipher_tests($method);\n    foreach ($tests as $idx => $test) {\n        echo \"$method - TEST $idx\\n\";\n        $pt = openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n            $test['iv'], $test['tag'], $test['aad']);\n        var_dump($test['pt'] === $pt);\n    }\n}\n// no IV\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    '', $test['tag'], $test['aad']));\n// failed because no AAD\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    $test['iv'], $test['tag']));\n// failed because wrong tag\nvar_dump(openssl_decrypt($test['ct'], $method, $test['key'], OPENSSL_RAW_DATA,\n    $test['iv'], str_repeat('x', 10), $test['aad']));\n?>")).toMatchSnapshot();
  });
});
