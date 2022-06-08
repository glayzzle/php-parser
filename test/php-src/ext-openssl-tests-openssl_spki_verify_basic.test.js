// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_spki_verify_basic.phpt
  it("openssl_spki_verify() tests for valid signature", function () {
    expect(parser.parseCode("<?php\n/* array of private key sizes to test */\n$key_sizes = array(1024, 2048, 4096);\n$pkeys = array();\nforeach ($key_sizes as $key_size) {\n    $key_file = \"file://\" . __DIR__ . \"/private_rsa_\" . $key_size . \".key\";\n    $pkeys[] = openssl_pkey_get_private($key_file);\n}\n/* array of available hashings to test */\n$algo = array(\n    OPENSSL_ALGO_SHA1,\n    OPENSSL_ALGO_SHA224,\n    OPENSSL_ALGO_SHA256,\n    OPENSSL_ALGO_SHA384,\n    OPENSSL_ALGO_SHA512,\n);\n/* loop over key sizes for test */\nforeach ($pkeys as $pkey) {\n    /* loop to create and verify results */\n    foreach ($algo as $value) {\n        $spkac = openssl_spki_new($pkey, _uuid(), $value);\n        var_dump(openssl_spki_verify(preg_replace('/SPKAC=/', '', $spkac)));\n        var_dump(openssl_spki_verify($spkac . 'Make it fail'));\n    }\n}\n/* generate a random challenge */\nfunction _uuid() {\n    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x', mt_rand(0, 0xffff),\n        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0x0fff) | 0x4000,\n        mt_rand(0, 0x3fff) | 0x8000, mt_rand(0, 0xffff),\n        mt_rand(0, 0xffff), mt_rand(0, 0xffff));\n}\n?>")).toMatchSnapshot();
  });
});
