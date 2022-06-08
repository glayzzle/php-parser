// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug60632.phpt
  it("Bug #60632: openssl_seal fails with AES", function () {
    expect(parser.parseCode("<?php\n$pkey = openssl_pkey_new(array(\n    'digest_alg' => 'sha256',\n    'private_key_bits' => 1024,\n    'private_key_type' => OPENSSL_KEYTYPE_RSA,\n    'encrypt_key' => false,\n    'config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf',\n));\n$details = openssl_pkey_get_details($pkey);\n$test_pubkey = $details['key'];\n$pubkey = openssl_pkey_get_public($test_pubkey);\n$encrypted = null;\n$ekeys = array();\ntry {\n    $result = openssl_seal('test phrase', $encrypted, $ekeys, array($pubkey), 'AES-256-CBC');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
