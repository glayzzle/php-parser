// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkey_get_details_basic.phpt
  it("openssl_pkey_get_details() with EC key", function () {
    expect(parser.parseCode("<?php\n$key = openssl_pkey_get_private(\"file://\" . __DIR__ . \"/private_ec.key\");\nprint_r(openssl_pkey_get_details($key));\n?>")).toMatchSnapshot();
  });
});
