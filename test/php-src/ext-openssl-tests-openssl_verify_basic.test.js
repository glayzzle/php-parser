// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_verify_basic.phpt
  it("openssl_verify() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"Testing openssl_verify()\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$pubkey = \"file://\" . __DIR__ . \"/public.key\";\n$wrong = \"wrong\";\nopenssl_sign($data, $sign, $privkey);\nvar_dump(openssl_verify($data, $sign, $pubkey));\nvar_dump(openssl_verify($data, $sign, $privkey));\nvar_dump(openssl_verify($data, $sign, $wrong));\nvar_dump(openssl_verify($data, $wrong, $pubkey));\nvar_dump(openssl_verify($wrong, $sign, $pubkey));\n?>")).toMatchSnapshot();
  });
});
