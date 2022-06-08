// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug71917.phpt
  it("Bug #71917: openssl_open() returns junk on envelope < 16 bytes", function () {
    expect(parser.parseCode("<?php\nfunction test($envkey) {\n    $publicKey = \"file://\" . __DIR__ . \"/public.key\";\n    $privateKey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n    openssl_public_encrypt($envkey, $envelope, $publicKey);\n    $sealed = openssl_encrypt(\n        'plaintext',\n        'rc4', $envkey,\n        OPENSSL_RAW_DATA | OPENSSL_DONT_ZERO_PAD_KEY\n    );\n    openssl_open($sealed, $output, $envelope, $privateKey, 'rc4');\n    var_dump($output === 'plaintext');\n}\n// works - key of 16 bytes\ntest('1234567890123456i');\n// fails - key of 15 bytes\ntest('123456789012345');\n?>")).toMatchSnapshot();
  });
});
