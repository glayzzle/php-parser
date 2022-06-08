// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_encrypt_ccm.phpt
  it("openssl_encrypt() with CCM cipher algorithm tests", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . \"/cipher_tests.inc\";\n$methods = ['aes-128-ccm', 'aes-256-ccm'];\nforeach ($methods as $method) {\n    $tests = openssl_get_cipher_tests($method);\n    foreach ($tests as $idx => $test) {\n        echo \"$method - TEST $idx\\n\";\n        $ct = openssl_encrypt($test['pt'], $method, $test['key'], OPENSSL_RAW_DATA,\n            $test['iv'], $tag, $test['aad'], strlen($test['tag']));\n        var_dump($test['ct'] === $ct);\n        var_dump($test['tag'] === $tag);\n    }\n}\n// Empty IV error\nvar_dump(openssl_encrypt('data', $method, 'password', 0, '', $tag, ''));\n// Test setting different IV length and tag length\nvar_dump(openssl_encrypt('data', $method, 'password', 0, str_repeat('x', 10), $tag, '', 14));\nvar_dump(strlen($tag));\n// Test setting invalid tag length\nvar_dump(openssl_encrypt('data', $method, 'password', 0, str_repeat('x', 16), $tag, '', 1024));\n?>")).toMatchSnapshot();
  });
});
