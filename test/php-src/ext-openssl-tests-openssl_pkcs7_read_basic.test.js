// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs7_read_basic.phpt
  it("openssl_pkcs7_read() tests", function () {
    expect(parser.parseCode("<?php\n$infile = file_get_contents(__DIR__ . \"/cert.p7b\");\n$certfile = file_get_contents(__DIR__ . \"/cert.crt\");\n$result = [];\nvar_dump(openssl_pkcs7_read(\"\", $result));\nvar_dump(openssl_pkcs7_read($certfile, $result));\nvar_dump(openssl_pkcs7_read($infile, $result));\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
