// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_encrypt_crash.phpt
  it("openssl_encrypt() crash with old OpenSSL", function () {
    expect(parser.parseCode("<?php\nopenssl_encrypt('', 'AES-128-CBC', 'foo');\nvar_dump(\"done\");\n?>")).toMatchSnapshot();
  });
});
