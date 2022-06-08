// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug78391.phpt
  it("Bug #78391: Assertion failure in openssl_random_pseudo_bytes", function () {
    expect(parser.parseCode("<?php\n$isStrongCrypto = false;\nvar_dump(strlen(openssl_random_pseudo_bytes(16, $isStrongCrypto)));\nvar_dump($isStrongCrypto);\n?>")).toMatchSnapshot();
  });
});
