// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug80747.phpt
  it("Bug #80747: Providing RSA key size < 512 generates key that crash PHP", function () {
    expect(parser.parseCode("<?php\n$conf = array(\n    'config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf',\n    'private_key_bits' => 511,\n);\nvar_dump(openssl_pkey_new($conf));\nvar_dump(openssl_error_string() !== false);\n?>")).toMatchSnapshot();
  });
});
