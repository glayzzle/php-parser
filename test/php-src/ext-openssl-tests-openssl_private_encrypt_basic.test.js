// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_private_encrypt_basic.phpt
  it("openssl_private_encrypt() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"Testing openssl_private_encrypt()\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$pubkey = \"file://\" . __DIR__ . \"/public.key\";\n$wrong = \"wrong\";\nclass test {\n    function __toString() {\n        return \"test\";\n    }\n}\n$obj = new test;\nvar_dump(openssl_private_encrypt($data, $encrypted, $privkey));\nvar_dump(openssl_private_encrypt($data, $encrypted, $pubkey));\nvar_dump(openssl_private_encrypt($data, $encrypted, $wrong));\nvar_dump(openssl_private_encrypt($data, $encrypted, $obj));\nvar_dump(openssl_private_encrypt($obj, $encrypted, $privkey));\nopenssl_public_decrypt($encrypted, $output, $pubkey);\nvar_dump($output);\n?>")).toMatchSnapshot();
  });
});
