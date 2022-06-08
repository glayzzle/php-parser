// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug72362.phpt
  it("Bug #72362: OpenSSL Blowfish encryption is incorrect for short keys", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    bin2hex(\n        openssl_encrypt(\n            \"this is a test string\",\n            \"bf-ecb\",\n            \"12345678\",\n            OPENSSL_RAW_DATA | OPENSSL_DONT_ZERO_PAD_KEY\n        )\n    )\n);\nvar_dump(\n    bin2hex(\n        openssl_encrypt(\n            \"this is a test string\",\n            \"bf-ecb\",\n            \"1234567812345678\",\n            OPENSSL_RAW_DATA\n        )\n    )\n);\n?>")).toMatchSnapshot();
  });
});
