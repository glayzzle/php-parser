// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkey_export_basic.phpt
  it("openssl_pkey_export() with EC key", function () {
    expect(parser.parseCode("<?php\n$key = openssl_pkey_get_private('file://' . __DIR__ . '/private_ec.key');\nvar_dump($key);\n$config_arg = array(\"config\" => __DIR__ . DIRECTORY_SEPARATOR . \"openssl.cnf\");\nvar_dump(openssl_pkey_export($key, $output, NULL, $config_arg));\necho $output;\n// Load the private key from the exported pem string\n$details = openssl_pkey_get_details(openssl_pkey_get_private($output));\nvar_dump(OPENSSL_KEYTYPE_EC === $details['type']);\n// Export key with passphrase\nopenssl_pkey_export($key, $output, 'passphrase', $config_arg);\n$details = openssl_pkey_get_details(openssl_pkey_get_private($output, 'passphrase'));\nvar_dump(OPENSSL_KEYTYPE_EC === $details['type']);\n// Read public key\n$pKey = openssl_pkey_get_public('file://' . __DIR__ . '/public_ec.key');\nvar_dump($pKey);\n// The details are the same for a public or private key, expect the private key parameter 'd\n$detailsPKey = openssl_pkey_get_details($pKey);\nvar_dump(array_diff_assoc($details['ec'], $detailsPKey['ec']));\n// Export to file\n$tempname = tempnam(sys_get_temp_dir(), 'openssl_ec');\nvar_dump(openssl_pkey_export_to_file($key, $tempname, NULL, $config_arg));\n$details = openssl_pkey_get_details(openssl_pkey_get_private('file://' . $tempname));\nvar_dump(OPENSSL_KEYTYPE_EC === $details['type']);\nvar_dump($key instanceof OpenSSLAsymmetricKey);\n// Clean the temporary file\n@unlink($tempname);\n?>")).toMatchSnapshot();
  });
});
