// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_verify.phpt
  it("openssl_x509_verify() tests", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . \"/cert.crt\",\"r\");\n$a = fread($fp, 8192);\nfclose($fp);\n$fp = fopen(__DIR__ . \"/public.key\",\"r\");\n$b = fread($fp, 8192);\nfclose($fp);\n$cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$key = \"file://\" . __DIR__ . \"/public.key\";\n$wrongKey = \"file://\" . __DIR__ . \"/public_rsa_2048.key\";\nvar_dump(openssl_x509_verify($cert, $key));\nvar_dump(openssl_x509_verify(\"\", $key));\nvar_dump(openssl_x509_verify($cert, \"\"));\nvar_dump(openssl_x509_verify(\"\", \"\"));\nvar_dump(openssl_x509_verify(openssl_x509_read($a), $b));\nvar_dump(openssl_x509_verify($cert, $wrongKey));\n?>")).toMatchSnapshot();
  });
});
