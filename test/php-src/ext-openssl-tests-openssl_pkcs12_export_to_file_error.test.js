// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs12_export_to_file_error.phpt
  it("openssl_pkcs12_export_to_file() error tests", function () {
    expect(parser.parseCode("<?php\n$pkcsfile = __DIR__ . \"/openssl_pkcs12_export_to_file__pkcsfile.tmp\";\n$cert_file = __DIR__ . \"/public.crt\";\n$cert = file_get_contents($cert_file);\n$cert_path = \"file://\" . $cert_file;\n$priv_file = __DIR__ . \"/private.crt\";\n$priv = file_get_contents($priv_file);\n$wrong_priv_file = __DIR__ . \"/private_rsa_1024.key\";\n$wrong_priv = file_get_contents($wrong_priv_file);\n$pass = 'test';\nvar_dump(openssl_pkcs12_export_to_file($cert, $pkcsfile, null, $pass));\nvar_dump(openssl_pkcs12_export_to_file($cert, $pkcsfile, $wrong_priv, $pass));\nvar_dump(openssl_pkcs12_export_to_file($cert, '.', $priv, $pass));\n?>")).toMatchSnapshot();
  });
});
