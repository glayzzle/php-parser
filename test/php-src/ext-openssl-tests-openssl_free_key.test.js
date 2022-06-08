// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_free_key.phpt
  it("void openssl_free_key ( resource $key_identifier );", function () {
    expect(parser.parseCode("<?php\necho \"Creating private key\\n\";\n$conf = array('config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf');\n$privkey = openssl_pkey_new($conf);\nif ($privkey === false)\n    die(\"failed to create private key\");\n$passphrase = \"banana\";\n$key_file_name = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($key_file_name === false)\n    die(\"failed to get a temporary filename!\");\necho \"Export key to file\\n\";\nopenssl_pkey_export_to_file($privkey, $key_file_name, $passphrase, $conf) or die(\"failed to export to file $key_file_name\");\necho \"Load key from file - array syntax\\n\";\n$loaded_key = openssl_pkey_get_private(array(\"file://$key_file_name\", $passphrase));\nif ($loaded_key === false)\n    die(\"failed to load key using array syntax\");\nopenssl_free_key($loaded_key);\necho \"Load key using direct syntax\\n\";\n$loaded_key = openssl_pkey_get_private(\"file://$key_file_name\", $passphrase);\nif ($loaded_key === false)\n    die(\"failed to load key using direct syntax\");\nopenssl_free_key($loaded_key);\necho \"Load key manually and use string syntax\\n\";\n$key_content = file_get_contents($key_file_name);\n$loaded_key = openssl_pkey_get_private($key_content, $passphrase);\nif ($loaded_key === false)\n    die(\"failed to load key using string syntax\");\nopenssl_free_key($loaded_key);\necho \"OK!\\n\";\n@unlink($key_file_name);\n?>")).toMatchSnapshot();
  });
});
