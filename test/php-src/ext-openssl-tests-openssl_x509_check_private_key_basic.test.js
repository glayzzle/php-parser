// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_check_private_key_basic.phpt
  it("openssl_x509_check_private_key() tests", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . \"/cert.crt\",\"r\");\n$a = fread($fp, 8192);\nfclose($fp);\n$fp = fopen(__DIR__ . \"/private_rsa_1024.key\",\"r\");\n$b = fread($fp, 8192);\nfclose($fp);\n$cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$key = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\nvar_dump(openssl_x509_check_private_key($cert, $key));\nvar_dump(openssl_x509_check_private_key(\"\", $key));\nvar_dump(openssl_x509_check_private_key($cert, \"\"));\nvar_dump(openssl_x509_check_private_key(\"\", \"\"));\nvar_dump(openssl_x509_check_private_key(openssl_x509_read($a), $b));\n?>")).toMatchSnapshot();
  });
});
