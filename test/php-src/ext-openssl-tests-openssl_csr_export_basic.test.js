// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_csr_export_basic.phpt
  it("openssl_csr_export() tests", function () {
    expect(parser.parseCode("<?php\n$wrong = \"wrong\";\n$config = __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf';\n$config_arg = array('config' => $config);\n$dn = array(\n    \"countryName\" => \"BR\",\n    \"stateOrProvinceName\" => \"Rio Grande do Sul\",\n    \"localityName\" => \"Porto Alegre\",\n    \"commonName\" => \"Henrique do N. Angelo\",\n    \"emailAddress\" => \"hnangelo@php.net\"\n);\n$args = array(\n    \"digest_alg\" => \"sha1\",\n    \"private_key_bits\" => 2048,\n    \"private_key_type\" => OPENSSL_KEYTYPE_DSA,\n    \"encrypt_key\" => true,\n    \"config\" => $config,\n);\n$privkey = openssl_pkey_new($config_arg);\n$csr = openssl_csr_new($dn, $privkey, $args);\nvar_dump(openssl_csr_export($csr, $output));\ntry {\n    var_dump(openssl_csr_export($wrong, $output));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(openssl_csr_export($privkey, $output));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(openssl_csr_export($csr, $output, false));\n?>")).toMatchSnapshot();
  });
});
