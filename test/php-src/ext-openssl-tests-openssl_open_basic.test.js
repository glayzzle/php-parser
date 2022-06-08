// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_open_basic.phpt
  it("openssl_open() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"openssl_open() test\";\n$pub_key = \"file://\" . __DIR__ . \"/public.key\";\n$priv_key = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$wrong = \"wrong\";\n$method = \"AES-128-ECB\";\nopenssl_seal($data, $sealed, $ekeys, array($pub_key, $pub_key, $pub_key), $method);\nopenssl_open($sealed, $output, $ekeys[0], $priv_key, $method);\nvar_dump($output);\nopenssl_open($sealed, $output2, $ekeys[1], $wrong, $method);\nvar_dump($output2);\nopenssl_open($sealed, $output3, $ekeys[2], $priv_key, $method);\nvar_dump($output3);\nopenssl_open($sealed, $output4, $wrong, $priv_key, $method);\nvar_dump($output4);\n?>")).toMatchSnapshot();
  });
});
