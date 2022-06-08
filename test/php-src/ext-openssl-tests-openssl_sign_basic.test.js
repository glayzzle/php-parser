// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_sign_basic.phpt
  it("openssl_sign() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"Testing openssl_sign()\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$wrong = \"wrong\";\nvar_dump(openssl_sign($data, $sign, $privkey));                 // no output\nvar_dump(openssl_sign($data, $sign, $wrong));\n?>")).toMatchSnapshot();
  });
});
