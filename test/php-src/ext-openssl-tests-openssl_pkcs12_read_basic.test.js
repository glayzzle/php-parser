// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs12_read_basic.phpt
  it("openssl_pkcs12_read() tests", function () {
    expect(parser.parseCode("<?php\n$cert = file_get_contents(__DIR__ . \"/public.crt\");\n$priv = file_get_contents(__DIR__ . \"/private.crt\");\n$extracert = file_get_contents(__DIR__ . \"/cert.crt\");\n$pass = \"qwerty\";\nopenssl_pkcs12_export($cert, $p12, $priv, $pass, array('extracerts' => $extracert));\nvar_dump(openssl_pkcs12_read(\"\", $certs, \"\"));\nvar_dump(openssl_pkcs12_read($p12, $certs, \"\"));\nvar_dump(openssl_pkcs12_read($p12, $certs, $pass));\nvar_dump($certs);\n?>")).toMatchSnapshot();
  });
});
